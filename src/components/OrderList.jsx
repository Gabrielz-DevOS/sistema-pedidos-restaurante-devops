import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import OrderCard from './OrderCard.jsx';
import { ORDER_STATUS } from '../constants/orderStatus.js';

const STATUSES = [
  { key: ORDER_STATUS.pending, label: 'Pendiente', countClass: 'count-pending' },
  { key: ORDER_STATUS.preparing, label: 'Preparando', countClass: 'count-preparing' },
  { key: ORDER_STATUS.delivered, label: 'Entregado', countClass: 'count-delivered' },
];

function OrderList({ orders, onStatusChange, onDeleteOrder }) {
  // On mobile, only "pending" is expanded by default
  const [expandedColumns, setExpandedColumns] = useState({
    [ORDER_STATUS.pending]: true,
    [ORDER_STATUS.preparing]: false,
    [ORDER_STATUS.delivered]: false,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)');
    const handleChange = (e) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  const toggleColumn = useCallback((statusKey) => {
    if (!isMobile) return;
    setExpandedColumns((prev) => ({
      ...prev,
      [statusKey]: !prev[statusKey],
    }));
  }, [isMobile]);

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
    <div className="kanban-board">
      {STATUSES.map((statusObj) => {
        const columnOrders = orders.filter((o) => o.status === statusObj.key);
        const isExpanded = !isMobile || expandedColumns[statusObj.key];

        return (
          <div
            className={`kanban-column ${isExpanded ? 'kanban-column--expanded' : 'kanban-column--collapsed'}`}
            key={statusObj.key}
          >
            <button
              type="button"
              className="kanban-column-header"
              onClick={() => toggleColumn(statusObj.key)}
              aria-expanded={isExpanded}
            >
              <h3>{statusObj.label}</h3>
              <div className="kanban-header-right">
                <span className={`kanban-count ${statusObj.countClass}`}>
                  {columnOrders.length}
                </span>
                <svg
                  className="kanban-chevron"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </button>
            {isExpanded && (
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
            )}
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

