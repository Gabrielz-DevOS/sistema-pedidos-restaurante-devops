/**
 * Estados posibles para un pedido del restaurante.
 * Se usan como valores únicos para evitar cadenas mágicas en el código.
 */
export const ORDER_STATUS = {
  pending: 'Pendiente',
  preparing: 'En preparación',
  delivered: 'Entregado',
};

/** Lista de estados disponibles para poblar selectores de UI. */
export const ORDER_STATUS_OPTIONS = Object.values(ORDER_STATUS);

/** Valor especial para el filtro "sin filtrar por estado". */
export const FILTER_ALL_STATUS = 'Todos';
