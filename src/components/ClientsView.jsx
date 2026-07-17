import { useState, useMemo, useEffect } from 'react';
import Drawer from './Drawer.jsx';
import ClientForm from './ClientForm.jsx';
import ClientList from './ClientList.jsx';
import { getClients, saveClients, createClient, filterClients } from '../utils/clientStorage.js';

function ClientsView() {
  const [clients, setClients] = useState(() => getClients());
  const [searchTerm, setSearchTerm] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    saveClients(clients);
  }, [clients]);

  const handleCreateClient = (clientData) => {
    const newClient = createClient(clientData);
    setClients((current) => [newClient, ...current]);
    setIsDrawerOpen(false);
  };

  const filteredClients = useMemo(
    () => filterClients(clients, searchTerm),
    [clients, searchTerm]
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 className="header-title">Directorio de Clientes</h2>
          <p className="section-label">Gestione sus clientes y sus límites de crédito</p>
        </div>
        <button className="btn-primary" onClick={() => setIsDrawerOpen(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" x2="19" y1="8" y2="14" />
            <line x1="22" x2="16" y1="11" y2="11" />
          </svg>
          <span className="btn-text">Nuevo Cliente</span>
        </button>
      </div>

      <div className="filters" style={{ gridTemplateColumns: '1fr', marginBottom: '20px' }}>
        <div className="filter-field">
          <label htmlFor="search-client">Buscar cliente</label>
          <input
            id="search-client"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por nombre, correo o teléfono..."
          />
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        <ClientList clients={filteredClients} />
      </div>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Nuevo Cliente"
      >
        <ClientForm onSubmit={handleCreateClient} />
      </Drawer>
    </div>
  );
}

export default ClientsView;
