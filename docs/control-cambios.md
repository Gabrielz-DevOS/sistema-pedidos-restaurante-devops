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

### CH-002: Agregar cálculo automático del total

Este cambio eliminó la necesidad de calcular manualmente el costo de cada pedido. Cada vez que el cliente selecciona o quita un producto, el total se recalcula de forma inmediata. Técnicamente se implementó con:

- Función `calculateOrderTotal(products)` en `src/utils/orderUtils.js`: recibe el arreglo de productos del pedido y retorna la suma de `precio × cantidad` de cada ítem.
- Integración en `OrderForm.jsx`: el total se calcula en tiempo real dentro del estado del componente y se muestra antes de confirmar el pedido.
- Integración en `OrderCard.jsx`: el total también se muestra en la tarjeta de cada pedido ya registrado.

### CH-003: Agregar búsqueda de pedidos

Este cambio resolvió un problema de usabilidad: a medida que el restaurante acumulaba pedidos, encontrar uno específico requería revisar toda la lista manualmente. La búsqueda filtra en tiempo real mientras el usuario escribe. Técnicamente se implementó con:

- Componente `OrderFilters.jsx`: contiene el campo de texto de búsqueda y el selector de estado. Emite los valores de filtro hacia el componente padre mediante props.
- Función reutilizable `filterOrders(orders, searchTerm, statusFilter)` en `src/utils/orderUtils.js`: aplica ambos filtros (nombre de cliente y estado) sobre el arreglo de pedidos y retorna el subconjunto que cumple las condiciones.
- Estado `searchTerm` en `src/App.jsx`: almacena el término de búsqueda ingresado por el usuario y lo pasa como prop a `filterOrders()`.

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
