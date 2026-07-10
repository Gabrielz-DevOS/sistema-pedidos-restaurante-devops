import PropTypes from 'prop-types';
import { ORDER_STATUS_OPTIONS, formatCurrency, formatDate, getStatusClass } from '../utils/orderUtils.js';

function OrderCard({ order, onStatusChange, onDeleteOrder }) {
  return (
    <article className="order-card">
      <div className="order-card-header">
        <div>
          <h3>{order.code}</h3>
          <p>{order.customerName}</p>
        </div>
        <span className={`status-badge ${getStatusClass(order.status)}`}>
          <span className="status-dot"></span>
          {order.status}
        </span>
      </div>

      <dl className="order-meta">
        <div>
          <dt>Mesa</dt>
          <dd>{order.tableNumber || 'Sin asignar'}</dd>
        </div>
        <div>
          <dt>Fecha</dt>
          <dd>{formatDate(order.createdAt)}</dd>
        </div>
      </dl>

      <ul className="order-items">
        {order.items.map((item) => (
          <li key={item.id}>
            <span>
              {item.quantity} x {item.name}
            </span>
            <strong>{formatCurrency(item.price * item.quantity)}</strong>
          </li>
        ))}
      </ul>

      {order.notes && (
        <div className="order-notes-display">
          <strong>Notas:</strong> <span>{order.notes}</span>
        </div>
      )}

      <div className="order-total">
        <span>Total</span>
        <strong>{formatCurrency(order.total)}</strong>
      </div>

      <div className="order-actions">
        <label>
          Estado
          <select
            value={order.status}
            onChange={(event) => onStatusChange(order.id, event.target.value)}
            aria-label={`Cambiar estado del pedido ${order.code}`}
          >
            {ORDER_STATUS_OPTIONS.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
        <button
          className="secondary-button danger-button"
          type="button"
          onClick={() => onDeleteOrder(order)}
          aria-label={`Eliminar pedido ${order.code} de ${order.customerName}`}
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    customerName: PropTypes.string.isRequired,
    tableNumber: PropTypes.string,
    notes: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
      })
    ).isRequired,
    total: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onDeleteOrder: PropTypes.func.isRequired,
};

export default OrderCard;
