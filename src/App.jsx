import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Drawer from './components/Drawer.jsx';
import OrderForm from './components/OrderForm.jsx';
import OrderList from './components/OrderList.jsx';
import OrderFilters from './components/OrderFilters.jsx';
import SalesSummary from './components/SalesSummary.jsx';
import { getOrders, saveOrders } from './utils/storage.js';
import {
  FILTER_ALL_STATUS,
  ORDER_STATUS,
  createOrder,
  filterOrders,
  generateOrderCode,
  removeOrder,
  updateOrderStatus,
} from './utils/orderUtils.js';

function App() {
  const [orders, setOrders] = useState(() => getOrders());
  const [statusFilter, setStatusFilter] = useState(FILTER_ALL_STATUS);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    saveOrders(orders);
  }, [orders]);

  useEffect(() => {
    const pendingCount = orders.filter((o) => o.status === ORDER_STATUS.pending).length;
    if (pendingCount > 0) {
      document.title = `(${pendingCount}) Pedidos Pendientes - Restaurante`;
    } else {
      document.title = 'Sistema de Pedidos de Restaurante';
    }
  }, [orders]);

  const nextOrderCode = useMemo(() => generateOrderCode(orders), [orders]);
  const filteredOrders = useMemo(
    () => filterOrders(orders, { statusFilter }),
    [orders, statusFilter],
  );

  /**
   * Registra un nuevo pedido en el estado, autogenerando el código correspondiente.
   * @param {Object} orderData - Datos del pedido (cliente, mesa, items, total).
   */
  function handleCreateOrder(orderData) {
    const newOrder = createOrder(orderData, nextOrderCode);
    setOrders((currentOrders) => [newOrder, ...currentOrders]);
    setIsDrawerOpen(false); // Cierra el drawer tras crear
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
    setStatusFilter(FILTER_ALL_STATUS);
  }


  return (
    <div className={`dashboard-layout ${isSidebarOpen ? 'sidebar-mobile-open' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="dashboard-main">
        <Header
          onOpenNewOrder={() => setIsDrawerOpen(true)}
          onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        />
        
        <main className="dashboard-content">
          <SalesSummary orders={orders} />

          <section className="kanban-section" aria-labelledby="order-list-title">
            <div className="kanban-header">
              <OrderFilters
                statusFilter={statusFilter}
                onStatusChange={setStatusFilter}
                onClearFilters={handleClearFilters}
              />
            </div>

            <OrderList
              orders={filteredOrders}
              onStatusChange={handleStatusChange}
              onDeleteOrder={handleDeleteOrder}
            />
          </section>
        </main>
      </div>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Nuevo Pedido"
      >
        <OrderForm nextOrderCode={nextOrderCode} onCreateOrder={handleCreateOrder} />
      </Drawer>
    </div>
  );
}

export default App;

