import PropTypes from 'prop-types';
import { FILTER_ALL_STATUS, ORDER_STATUS_OPTIONS } from '../utils/orderUtils.js';

function OrderFilters({ statusFilter, onStatusChange, onClearFilters }) {
  const isClean = statusFilter === FILTER_ALL_STATUS;

  return (
    <div className="filters" aria-label="Filtros de pedidos">
      <div className="filter-field">
        <label htmlFor="status-filter">Estado</label>
        <select id="status-filter" value={statusFilter} onChange={(event) => onStatusChange(event.target.value)}>
          <option value={FILTER_ALL_STATUS}>{FILTER_ALL_STATUS}</option>
          {ORDER_STATUS_OPTIONS.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <button
        className="secondary-button"
        type="button"
        onClick={onClearFilters}
        disabled={isClean}
      >
        Limpiar filtros
      </button>
    </div>
  );
}

OrderFilters.propTypes = {
  statusFilter: PropTypes.string.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onClearFilters: PropTypes.func.isRequired,
};

export default OrderFilters;
