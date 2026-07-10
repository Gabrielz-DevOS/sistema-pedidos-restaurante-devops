import PropTypes from 'prop-types';
import { formatCurrency, getSalesSummary } from '../utils/orderUtils.js';

function SalesSummary({ orders }) {
  const summary = getSalesSummary(orders);

  return (
    <section className="summary-panel" aria-label="Resumen de ventas">
      <article>
        <span>Total de pedidos</span>
        <strong>{summary.totalOrders}</strong>
      </article>
      <article className="highlight-card">
        <span>Total vendido</span>
        <strong>{formatCurrency(summary.totalSold)}</strong>
      </article>
      <article>
        <span>Productos vendidos</span>
        <strong>{summary.totalProducts}</strong>
      </article>
      <article>
        <span>Pendientes</span>
        <strong>{summary.pendingOrders}</strong>
      </article>
      <article>
        <span>Entregados</span>
        <strong>{summary.deliveredOrders}</strong>
      </article>
    </section>
  );
}

SalesSummary.propTypes = {
  orders: PropTypes.array.isRequired,
};

export default SalesSummary;
