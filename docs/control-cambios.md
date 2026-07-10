# Control de Cambios

Este documento registra los cambios solicitados para el Sistema de Pedidos de Restaurante. Su objetivo es demostrar cómo la Gestión de la Configuración de Software permite controlar solicitudes, responsables, aprobación, estado e implementación.

## Registro formal

| Código | Cambio solicitado | Motivo | Responsable | Fecha de aprobación | Estado |
|---|---|---|---|---|---|
| CH-001 | Crear registro de pedidos | Permitir al restaurante registrar pedidos de clientes | Integrante 1 | 09/07/2026 | Aprobado |
| CH-002 | Agregar cálculo automático del total | Evitar errores al sumar productos manualmente | Integrante 2 | 09/07/2026 | Aprobado |
| CH-003 | Agregar búsqueda de pedidos | Encontrar pedidos rápidamente por cliente | Integrante 3 | 10/07/2026 | Aprobado |
| CH-004 | Agregar estados del pedido | Controlar el avance de cada pedido | Integrante 4 | 10/07/2026 | Aprobado |
| CH-005 | Agregar resumen de ventas | Visualizar información general del restaurante | Integrante 5 | 11/07/2026 | Aprobado |

## Detalle por cambio

### CH-001: Crear registro de pedidos

Este cambio fue el punto de partida del sistema. Se implementó un formulario que permite a los usuarios del restaurante ingresar el nombre del cliente y seleccionar los productos del menú. Al confirmar, el pedido queda almacenado y visible en la lista. Técnicamente se implementó con:

- Componente `OrderForm.jsx`: contiene el formulario con el campo de nombre de cliente y el selector de productos.
- Componente `OrderList.jsx`: recibe la lista de pedidos y la renderiza en pantalla.
- Función `validateOrder()` en `src/utils/orderUtils.js`: valida que el pedido tenga nombre y al menos un producto antes de guardarlo.
- Función `saveOrders()` en `src/utils/storage.js`: persiste los pedidos en LocalStorage para que sobrevivan a recargas del navegador.

## Ejemplo explicado

El cliente pidió agregar búsqueda de pedidos porque, al aumentar la cantidad de pedidos registrados, era difícil encontrar rápidamente los pedidos de un cliente específico. El cambio quedó registrado como `CH-003`, fue aprobado el 10/07/2026 y se implementó en la versión `v2.0`.

En la aplicación, este cambio se ve en el campo `Buscar cliente`, ubicado sobre la lista de pedidos. Técnicamente se implementó con:

- Componente `OrderFilters.jsx`.
- Función reutilizable `filterOrders()` en `src/utils/orderUtils.js`.
- Estado `searchTerm` en `src/App.jsx`.

## Relación entre cambios, commits y versiones

| Cambio | Implementación | Versión relacionada | Evidencia para mostrar |
|---|---|---|---|
| CH-001 | Registro de pedidos con `OrderForm` y `OrderList` | `v1.0` | Commit `feat: agregar registro de pedidos` |
| CH-002 | Cálculo con `calculateOrderTotal()` | `v1.0` | Código en `src/utils/orderUtils.js` |
| CH-003 | Búsqueda por cliente con `filterOrders()` | `v2.0` | Commit `feat: agregar busqueda filtros estados y resumen` |
| CH-004 | Estados Pendiente, En preparación y Entregado | `v2.0` | Componente `OrderCard.jsx` |
| CH-005 | Resumen de ventas con `SalesSummary` | `v2.0` | Componente `SalesSummary.jsx` |

## Cómo demostrarlo

1. Abrir este archivo y explicar que cada cambio tiene código, motivo, responsable, aprobación y estado.
2. Mostrar en GitHub los commits relacionados.
3. Abrir la aplicación y registrar un pedido.
4. Buscar el pedido por nombre de cliente.
5. Cambiar su estado y observar cómo se actualiza el resumen.
