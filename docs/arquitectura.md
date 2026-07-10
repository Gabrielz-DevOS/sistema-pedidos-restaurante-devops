# Arquitectura del Sistema

Este documento describe la estructura técnica del Sistema de Pedidos de Restaurante.

## Tipo de aplicación

El sistema es una **aplicación web de página única (SPA)** construida con React y empaquetada con Vite. No tiene servidor ni base de datos externa. Toda la lógica ocurre en el navegador del usuario.

## Diagrama de componentes

```
App.jsx
├── Header.jsx
├── SalesSummary.jsx
├── OrderFilters.jsx
├── OrderForm.jsx
│   └── ProductSelector.jsx
└── OrderList.jsx
    └── OrderCard.jsx (×N)
```

## Capas de la aplicación

### Capa de presentación (components/)

Contiene los componentes React responsables de renderizar la interfaz de usuario. Cada componente recibe datos mediante props y emite eventos hacia el componente padre.

| Componente | Responsabilidad |
|---|---|
| `Header.jsx` | Encabezado general del sistema |
| `OrderForm.jsx` | Formulario para crear un nuevo pedido |
| `ProductSelector.jsx` | Selector de productos del menú dentro del formulario |
| `OrderList.jsx` | Contenedor que renderiza la lista de pedidos |
| `OrderCard.jsx` | Tarjeta individual de pedido con cambio de estado y eliminación |
| `OrderFilters.jsx` | Barra de búsqueda y filtro por estado |
| `SalesSummary.jsx` | Panel con métricas de ventas: total de pedidos, ingresos, pendientes y entregados |

### Capa de lógica (utils/)

Contiene funciones puras reutilizables que no dependen de componentes React. Estas funciones pueden probarse de forma independiente.

| Archivo | Funciones |
|---|---|
| `orderUtils.js` | `calculateOrderTotal()`, `filterOrders()`, `updateOrderStatus()`, `validateOrder()` |
| `storage.js` | `saveOrders()`, `getOrders()` |

### Capa de datos (data/)

Contiene los datos estáticos de la aplicación.

| Archivo | Contenido |
|---|---|
| `menu.js` | Arreglo de productos del menú con nombre, precio y categoría |

## Flujo de datos

```
[Usuario]
   │
   ▼
[OrderForm] ──────────────────────────────► [validateOrder()]
   │                                              │
   ▼                                              ▼
[App.jsx: estado `orders`] ◄──────── [saveOrders() → LocalStorage]
   │
   ├──► [SalesSummary]: recibe `orders`, calcula métricas
   ├──► [OrderFilters]: recibe y emite `searchTerm` y `statusFilter`
   └──► [OrderList]: recibe `orders` filtrados
            └──► [OrderCard]: recibe cada pedido, emite cambio de estado y eliminación
```

## Persistencia

Los pedidos se almacenan en `localStorage` del navegador bajo la clave `orders`. Al cargar la aplicación, `getOrders()` recupera los pedidos almacenados. Al registrar, modificar o eliminar un pedido, `saveOrders()` actualiza el almacenamiento.

## Integración continua

El pipeline de CI definido en `.github/workflows/ci.yml` se ejecuta en cada push a `main`. Verifica que el proyecto compila correctamente ejecutando `npm run build`. Si el build falla, el pipeline marca el commit como fallido en GitHub.

## Despliegue

El directorio `dist/` generado por `npm run build` contiene la versión de producción de la aplicación (HTML, CSS y JavaScript optimizados). Render sirve este directorio estático como un sitio web público accesible desde cualquier navegador.
