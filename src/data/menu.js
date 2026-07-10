/**
 * Categorías disponibles en el menú del restaurante.
 * Se usan para agrupar los productos en el selector de la interfaz.
 */
export const MENU_CATEGORIES = {
  starter: 'Entrada',
  main: 'Plato fuerte',
  beverage: 'Bebida',
  dessert: 'Postre',
};

/**
 * Lista de productos disponibles en el menú.
 * Cada producto tiene: id único, nombre, categoría y precio en USD.
 */
export const menuItems = [
  {
    id: 'sopa-dia',
    name: 'Sopa del día',
    category: MENU_CATEGORIES.starter,
    price: 2.5,
  },
  {
    id: 'ensalada-casa',
    name: 'Ensalada de la casa',
    category: MENU_CATEGORIES.starter,
    price: 3,
  },
  {
    id: 'seco-pollo',
    name: 'Seco de pollo',
    category: MENU_CATEGORIES.main,
    price: 5.5,
  },
  {
    id: 'lomo-salteado',
    name: 'Lomo salteado',
    category: MENU_CATEGORIES.main,
    price: 6.75,
  },
  {
    id: 'jugo-natural',
    name: 'Jugo natural',
    category: MENU_CATEGORIES.beverage,
    price: 1.5,
  },
  {
    id: 'cafe',
    name: 'Café',
    category: MENU_CATEGORIES.beverage,
    price: 1.25,
  },
  {
    id: 'flan',
    name: 'Flan de caramelo',
    category: MENU_CATEGORIES.dessert,
    price: 2.0,
  },
];
