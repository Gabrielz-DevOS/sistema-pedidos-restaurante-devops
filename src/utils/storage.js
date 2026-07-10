/** Clave utilizada en localStorage para almacenar los pedidos del restaurante. */
const STORAGE_KEY = 'restaurant-orders';

/**
 * Recupera los pedidos almacenados en localStorage.
 * Si no existe ningún pedido guardado o el JSON está corrupto, retorna un arreglo vacío.
 * @returns {Array} Lista de pedidos guardados.
 */
export function getOrders() {
  const storedOrders = localStorage.getItem(STORAGE_KEY);

  if (!storedOrders) {
    return [];
  }

  try {
    return JSON.parse(storedOrders);
  } catch {
    return [];
  }
}

/**
 * Guarda la lista completa de pedidos en localStorage, sobrescribiendo la anterior.
 * Si localStorage está lleno o no disponible, registra el error en consola sin interrumpir la app.
 * @param {Array} orders - Lista de pedidos a persistir.
 */
export function saveOrders(orders) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('No se pudieron guardar los pedidos en localStorage:', error);
  }
}
