import { ORDER_STATUS_OPTIONS, formatCurrency, formatDate, getStatusClass } from '../utils/orderUtils.js';

function OrderCard({ order, onStatusChange, onDeleteOrder }) {
  return (
    <article className="order-card">
      <div className="order-card-header">
        <div>
          <h3>{order.code}</h3>
          <p>{order.customerName}</p>
        </div>
        <span className={`status-badge ${getStatusClass(order.status)}`}>{order.status}</span>
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

      <div className="order-total">
        <span>Total</span>
        <strong>{formatCurrency(order.total)}</strong>
      </div>

      <div className="order-actions">
        <label>
          Estado
          <select value={order.status} onChange={(event) => onStatusChange(order.id, event.target.value)}>
            {ORDER_STATUS_OPTIONS.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
        <button className="secondary-button danger-button" type="button" onClick={() => onDeleteOrder(order.id)}>
          Eliminar
        </button>
      </div>
    </article>
  );
}

export default OrderCard;
