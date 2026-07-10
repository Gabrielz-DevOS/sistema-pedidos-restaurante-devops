import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import OrderForm from './components/OrderForm.jsx';
import OrderList from './components/OrderList.jsx';
import OrderFilters from './components/OrderFilters.jsx';
import SalesSummary from './components/SalesSummary.jsx';
import { getOrders, saveOrders } from './utils/storage.js';
import {
  FILTER_ALL_STATUS,
  createOrder,
  filterOrders,
  generateOrderCode,
  removeOrder,
  updateOrderStatus,
} from './utils/orderUtils.js';

function App() {
  const [orders, setOrders] = useState(() => getOrders());
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState(FILTER_ALL_STATUS);

  useEffect(() => {
    saveOrders(orders);
  }, [orders]);

  const nextOrderCode = useMemo(() => generateOrderCode(orders), [orders]);
  const filteredOrders = useMemo(
    () => filterOrders(orders, { searchTerm, statusFilter }),
    [orders, searchTerm, statusFilter],
  );

  /**
   * Registra un nuevo pedido en el estado, autogenerando el código correspondiente.
   * @param {Object} orderData - Datos del pedido (cliente, mesa, items, total).
   */
  function handleCreateOrder(orderData) {
    const newOrder = createOrder(orderData, nextOrderCode);
    setOrders((currentOrders) => [newOrder, ...currentOrders]);
  }

  /**
   * Maneja el cambio de estado de un pedido específico.
   * @param {string} orderId - ID único del pedido.
   * @param {string} newStatus - Nuevo estado del pedido.
   */
  function handleStatusChange(orderId, newStatus) {
    setOrders((currentOrders) => updateOrderStatus(currentOrders, orderId, newStatus));
  }

  /**
   * Solicita confirmación y elimina un pedido del estado.
   * @param {Object} order - Pedido completo a eliminar.
   */
  function handleDeleteOrder(order) {
    const shouldDelete = window.confirm(
      `¿Está seguro que desea eliminar el pedido ${order.code} de ${order.customerName}?`
    );
    if (shouldDelete) {
      setOrders((currentOrders) => removeOrder(currentOrders, order.id));
    }
  }


  /**
   * Limpia los filtros de búsqueda y estado aplicados a la lista de pedidos.
   */
  function handleClearFilters() {
    setSearchTerm('');
    setStatusFilter(FILTER_ALL_STATUS);
  }


  return (
    <>
      <Header />
      <main className="app-shell">
        <section className="panel order-panel" aria-labelledby="order-form-title">
          <div className="section-heading">
            <p className="section-label">Registro</p>
            <h2 id="order-form-title">Nuevo pedido</h2>
          </div>
          <OrderForm nextOrderCode={nextOrderCode} onCreateOrder={handleCreateOrder} />
        </section>

        <div className="content-column">
          <SalesSummary orders={orders} />

          <section className="panel list-panel" aria-labelledby="order-list-title">
            <div className="section-heading list-heading">
              <div>
                <p className="section-label">Pedidos</p>
                <h2 id="order-list-title">Pedidos registrados</h2>
              </div>
              <span className="counter">
                {filteredOrders.length} de {orders.length} pedidos
              </span>
            </div>

            <OrderFilters
              searchTerm={searchTerm}
              statusFilter={statusFilter}
              onSearchChange={setSearchTerm}
              onStatusChange={setStatusFilter}
              onClearFilters={handleClearFilters}
            />

            <OrderList
              orders={filteredOrders}
              onStatusChange={handleStatusChange}
              onDeleteOrder={handleDeleteOrder}
            />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
