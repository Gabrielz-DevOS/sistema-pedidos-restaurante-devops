import { formatCurrency, getSalesSummary } from '../utils/orderUtils.js';

function SalesSummary({ orders }) {
  const summary = getSalesSummary(orders);

  return (
    <section className="summary-panel" aria-label="Resumen de ventas">
      <article>
        <span>Total de pedidos</span>
        <strong>{summary.totalOrders}</strong>
      </article>
      <article>
        <span>Total vendido</span>
        <strong>{formatCurrency(summary.totalSold)}</strong>
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

export default SalesSummary;
