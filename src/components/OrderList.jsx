import PropTypes from 'prop-types';
import OrderCard from './OrderCard.jsx';

function OrderList({ orders, onStatusChange, onDeleteOrder }) {
  if (orders.length === 0) {
    return (
      <div className="empty-state">
        <svg
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="48"
          height="48"
          style={{ color: 'var(--color-text-muted)', marginBottom: '12px' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.008 1.24l.885 1.77a2.25 2.25 0 0 0 2.007 1.24h1.98a2.25 2.25 0 0 0 2.007-1.24l.885-1.77a2.25 2.25 0 0 1 2.007-1.24h3.86m-18 0h18a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v4.5A2.25 2.25 0 0 0 2.25 13.5Z"
          />
        </svg>
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

OrderList.propTypes = {
  orders: PropTypes.array.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onDeleteOrder: PropTypes.func.isRequired,
};

export default OrderList;
