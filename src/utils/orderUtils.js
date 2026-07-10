export { ORDER_STATUS, ORDER_STATUS_OPTIONS, FILTER_ALL_STATUS } from '../constants/orderStatus.js';

export function calculateOrderTotal(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

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

export function generateOrderCode(orders) {
  const orderNumbers = orders
    .map((order) => Number(order.code?.replace('PED-', '')))
    .filter((orderNumber) => !Number.isNaN(orderNumber));
  const nextNumber = orderNumbers.length > 0 ? Math.max(...orderNumbers) + 1 : 1;
  return `PED-${String(nextNumber).padStart(3, '0')}`;
}

export function filterOrders(orders, filters) {
  const normalizedSearch = filters.searchTerm.trim().toLowerCase();

  return orders.filter((order) => {
    const matchesCustomer = order.customerName.toLowerCase().includes(normalizedSearch);
    const matchesStatus = filters.statusFilter === FILTER_ALL_STATUS || order.status === filters.statusFilter;

    return matchesCustomer && matchesStatus;
  });
}

export function updateOrderStatus(orders, orderId, newStatus) {
  return orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order));
}

export function removeOrder(orders, orderId) {
  return orders.filter((order) => order.id !== orderId);
}

export function getSalesSummary(orders) {
  return {
    totalOrders: orders.length,
    totalSold: orders.reduce((total, order) => total + order.total, 0),
    pendingOrders: orders.filter((order) => order.status === ORDER_STATUS.pending).length,
    deliveredOrders: orders.filter((order) => order.status === ORDER_STATUS.delivered).length,
  };
}

export function getStatusClass(status) {
  const statusClasses = {
    [ORDER_STATUS.pending]: 'status-pending',
    [ORDER_STATUS.preparing]: 'status-preparing',
    [ORDER_STATUS.delivered]: 'status-delivered',
  };

  return statusClasses[status] || 'status-pending';
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('es-EC', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

export function formatDate(dateValue) {
  return new Intl.DateTimeFormat('es-EC', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(dateValue));
}
