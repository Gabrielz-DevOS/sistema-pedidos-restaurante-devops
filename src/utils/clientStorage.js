const STORAGE_KEY = 'resto_clients';

/**
 * Obtiene la lista de clientes almacenada en localStorage.
 * @returns {Array} Lista de clientes.
 */
export function getClients() {
  try {
    const clientsData = localStorage.getItem(STORAGE_KEY);
    return clientsData ? JSON.parse(clientsData) : [];
  } catch (error) {
    console.error('Error reading clients from storage:', error);
    return [];
  }
}

/**
 * Guarda la lista completa de clientes en localStorage.
 * @param {Array} clients - Lista de clientes a guardar.
 */
export function saveClients(clients) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
  } catch (error) {
    console.error('Error saving clients to storage:', error);
  }
}

/**
 * Crea un nuevo objeto de cliente.
 * @param {Object} clientData - Datos del cliente.
 * @returns {Object} Cliente creado.
 */
export function createClient(clientData) {
  return {
    id: crypto.randomUUID(),
    name: clientData.name.trim(),
    phone: clientData.phone?.trim() || '',
    email: clientData.email?.trim() || '',
    creditLimit: Number(clientData.creditLimit) || 0,
    balance: 0, // Inicia con balance de deuda cero
    createdAt: new Date().toISOString(),
  };
}

/**
 * Filtra los clientes por un término de búsqueda.
 * @param {Array} clients - Lista de clientes.
 * @param {string} searchTerm - Término de búsqueda.
 * @returns {Array} Clientes que coinciden con la búsqueda.
 */
export function filterClients(clients, searchTerm) {
  if (!searchTerm) return clients;
  const normalizedSearch = searchTerm.trim().toLowerCase();
  
  return clients.filter((client) => 
    client.name.toLowerCase().includes(normalizedSearch) ||
    client.phone.includes(normalizedSearch) ||
    client.email.toLowerCase().includes(normalizedSearch)
  );
}
