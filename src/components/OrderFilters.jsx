import { FILTER_ALL_STATUS, ORDER_STATUS_OPTIONS } from '../utils/orderUtils.js';

function OrderFilters({ searchTerm, statusFilter, onSearchChange, onStatusChange, onClearFilters }) {
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

      <button className="secondary-button" type="button" onClick={onClearFilters}>
        Limpiar filtros
      </button>
    </div>
  );
}

export default OrderFilters;
