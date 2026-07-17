import PropTypes from 'prop-types';
import { formatCurrency } from '../utils/orderUtils.js';

function ClientList({ clients }) {
  if (clients.length === 0) {
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
            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
          />
        </svg>
        <h3>No hay clientes registrados</h3>
        <p>Haga clic en "Nuevo Cliente" para registrar uno.</p>
      </div>
    );
  }

  return (
    <div className="client-list">
      {clients.map((client) => (
        <article key={client.id} className="order-card" style={{ marginBottom: '14px' }}>
          <div className="order-card-header">
            <div>
              <h3 style={{ marginBottom: '4px' }}>{client.name}</h3>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>{client.email || 'Sin correo'}</p>
            </div>
          </div>
          
          <dl className="order-meta" style={{ marginTop: '12px' }}>
            <div>
              <dt>Teléfono</dt>
              <dd>{client.phone || '-'}</dd>
            </div>
            <div>
              <dt>Límite Crédito</dt>
              <dd style={{ color: 'var(--color-primary)' }}>{formatCurrency(client.creditLimit)}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}

ClientList.propTypes = {
  clients: PropTypes.array.isRequired,
};

export default ClientList;
