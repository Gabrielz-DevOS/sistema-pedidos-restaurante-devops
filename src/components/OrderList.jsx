import OrderCard from './OrderCard.jsx';

function OrderList({ orders, onStatusChange, onDeleteOrder }) {
  if (orders.length === 0) {
    return (
      <div className="empty-state">
        <h3>No hay pedidos para mostrar</h3>
        <p>Registre un pedido o limpie los filtros aplicados.</p>
      </div>
    );
  }

  return (
    <div className="order-list">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
          onStatusChange={onStatusChange}
          onDeleteOrder={onDeleteOrder}
        />
      ))}
    </div>
  );
}

export default OrderList;
