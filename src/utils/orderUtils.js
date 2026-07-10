export { ORDER_STATUS, ORDER_STATUS_OPTIONS, FILTER_ALL_STATUS } from '../constants/orderStatus.js';
import { ORDER_STATUS, FILTER_ALL_STATUS } from '../constants/orderStatus.js';

/**
 * Calcula el total monetario de un pedido sumando precio × cantidad de cada ítem.
 * @param {Array<{price: number, quantity: number}>} items - Productos del pedido.
 * @returns {number} Total en USD.
 */
export function calculateOrderTotal(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

/**
 * Valida los datos de un pedido antes de crearlo.
 * @param {{customerName: string, items: Array}} orderData - Datos del pedido a validar.
 * @returns {{isValid: boolean, message: string}} Resultado de la validación.
 */
export function validateOrder(orderData) {
  if (!orderData.customerName.trim()) {
    return {
      isValid: false,
      message: 'Ingrese el nombre del cliente.',
    };
  }

  if (orderData.items.length === 0) {
    return {
      isValid: false,
      message: 'Seleccione al menos un producto del menú.',
    };
  }

  return {
    isValid: true,
    message: '',
  };
}

/**
 * Crea un nuevo objeto de pedido con todos sus campos inicializados.
 * @param {{customerName: string, tableNumber: string, items: Array, total: number}} orderData
 * @param {string} code - Código de pedido generado (ej. "PED-001").
 * @returns {Object} Pedido completo listo para persistir.
 */
export function createOrder(orderData, code) {
  return {
    id: crypto.randomUUID(),
    code,
    customerName: orderData.customerName.trim(),
    tableNumber: orderData.tableNumber.trim(),
    items: orderData.items,
    total: orderData.total,
    status: ORDER_STATUS.pending,
    createdAt: new Date().toISOString(),
  };
}

/**
 * Genera el próximo código de pedido en formato "PED-XXX".
 * @param {Array<{code: string}>} orders - Lista de pedidos existentes.
 * @returns {string} Código siguiente (ej. "PED-005").
 */
export function generateOrderCode(orders) {
  const orderNumbers = orders
    .map((order) => Number(order.code?.replace('PED-', '')))
    .filter((orderNumber) => !Number.isNaN(orderNumber));
  const nextNumber = orderNumbers.length > 0 ? Math.max(...orderNumbers) + 1 : 1;
  return `PED-${String(nextNumber).padStart(3, '0')}`;
}

/**
 * Filtra la lista de pedidos por nombre de cliente y/o estado.
 * @param {Array} orders - Lista completa de pedidos.
 * @param {{searchTerm: string, statusFilter: string}} filters - Criterios de filtro.
 * @returns {Array} Pedidos que cumplen ambos criterios.
 */
export function filterOrders(orders, filters) {
  const normalizedSearch = filters.searchTerm.trim().toLowerCase();

  return orders.filter((order) => {
    const matchesCustomer = order.customerName.toLowerCase().includes(normalizedSearch);
    const matchesStatus = filters.statusFilter === FILTER_ALL_STATUS || order.status === filters.statusFilter;

    return matchesCustomer && matchesStatus;
  });
}

/**
 * Actualiza el estado de un pedido específico en la lista.
 * @param {Array} orders - Lista de pedidos.
 * @param {string} orderId - ID del pedido a actualizar.
 * @param {string} newStatus - Nuevo estado a asignar.
 * @returns {Array} Nueva lista con el pedido actualizado.
 */
export function updateOrderStatus(orders, orderId, newStatus) {
  return orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order));
}

/**
 * Elimina un pedido de la lista por su ID.
 * @param {Array} orders - Lista de pedidos.
 * @param {string} orderId - ID del pedido a eliminar.
 * @returns {Array} Nueva lista sin el pedido eliminado.
 */
export function removeOrder(orders, orderId) {
  return orders.filter((order) => order.id !== orderId);
}

/**
 * Calcula las métricas de resumen de ventas a partir de todos los pedidos.
 * @param {Array} orders - Lista completa de pedidos.
 * @returns {{totalOrders: number, totalSold: number, pendingOrders: number, deliveredOrders: number}}
 */
export function getSalesSummary(orders) {
  return {
    totalOrders: orders.length,
    totalSold: orders.reduce((total, order) => total + order.total, 0),
    pendingOrders: orders.filter((order) => order.status === ORDER_STATUS.pending).length,
    deliveredOrders: orders.filter((order) => order.status === ORDER_STATUS.delivered).length,
  };
}

/**
 * Devuelve la clase CSS correspondiente al estado de un pedido.
 * @param {string} status - Estado del pedido.
 * @returns {string} Nombre de la clase CSS.
 */
export function getStatusClass(status) {
  const statusClasses = {
    [ORDER_STATUS.pending]: 'status-pending',
    [ORDER_STATUS.preparing]: 'status-preparing',
    [ORDER_STATUS.delivered]: 'status-delivered',
  };

  return statusClasses[status] || 'status-pending';
}

/**
 * Formatea un valor numérico como moneda en USD con localización latinoamericana.
 * @param {number} value - Valor a formatear.
 * @returns {string} Cadena formateada (ej. "$5.50").
 */
export function formatCurrency(value) {
  return new Intl.NumberFormat('es-EC', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

/**
 * Formatea una fecha ISO como cadena de fecha y hora corta en español.
 * @param {string} dateValue - Fecha en formato ISO 8601.
 * @returns {string} Fecha formateada (ej. "10/7/26, 5:00 a.m.").
 */
export function formatDate(dateValue) {
  return new Intl.DateTimeFormat('es-EC', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(dateValue));
}
