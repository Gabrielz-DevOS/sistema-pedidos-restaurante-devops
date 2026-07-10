import PropTypes from 'prop-types';
import OrderCard from './OrderCard.jsx';
import { ORDER_STATUS } from '../constants/orderStatus.js';

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

  const STATUSES = [
    { key: ORDER_STATUS.pending, label: 'Pendiente', countClass: 'count-pending' },
    { key: ORDER_STATUS.preparing, label: 'Preparando', countClass: 'count-preparing' },
    { key: ORDER_STATUS.delivered, label: 'Entregado', countClass: 'count-delivered' },
  ];

  return (
    <div className="kanban-board">
      {STATUSES.map((statusObj) => {
        const columnOrders = orders.filter((o) => o.status === statusObj.key);
        return (
          <div className="kanban-column" key={statusObj.key}>
            <div className="kanban-column-header">
              <h3>{statusObj.label}</h3>
              <span className={`kanban-count ${statusObj.countClass}`}>
                {columnOrders.length}
              </span>
            </div>
            <div className="kanban-column-content">
              {columnOrders.length === 0 ? (
                <div className="kanban-empty">Sin pedidos</div>
              ) : (
                columnOrders.map((order) => (
                  <OrderCard
                    key={order.id}
                    order={order}
                    onStatusChange={onStatusChange}
                    onDeleteOrder={onDeleteOrder}
                  />
                ))
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

OrderList.propTypes = {
  orders: PropTypes.array.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onDeleteOrder: PropTypes.func.isRequired,
};

export default OrderList;
