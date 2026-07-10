import PropTypes from 'prop-types';
import { FILTER_ALL_STATUS, ORDER_STATUS_OPTIONS } from '../utils/orderUtils.js';

function OrderFilters({ searchTerm, statusFilter, onSearchChange, onStatusChange, onClearFilters }) {
  const isClean = !searchTerm.trim() && statusFilter === FILTER_ALL_STATUS;

  return (
    <div className="filters" aria-label="Filtros de pedidos">
      <div className="filter-field">
        <label htmlFor="search-order">Buscar cliente</label>
        <input
          id="search-order"
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Ej. Andrea"
        />
      </div>

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
  searchTerm: PropTypes.string.isRequired,
  statusFilter: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onClearFilters: PropTypes.func.isRequired,
};

export default OrderFilters;
