# Sistema de Pedidos de Restaurante DevOps

Proyecto académico final integrador para la asignatura Gestión de la Configuración de Software.

## Descripción

Aplicación web simple para registrar pedidos de un restaurante, seleccionar productos del menú, calcular totales y administrar el estado de cada pedido. El proyecto demuestra gestión del cambio, control de versiones, construcción, integración continua, despliegue continuo, reutilización de software y variabilidad entre versiones.

No utiliza backend, base de datos externa, autenticación ni APIs externas. Los pedidos se guardan en el navegador mediante LocalStorage.

## Tecnologías usadas

- React
- Vite
- JavaScript
- CSS propio
- LocalStorage
- Git y GitHub
- GitHub Actions
- Vercel

## Funcionalidades

### Versión 1.0 básica

- Registrar pedidos.
- Seleccionar productos del menú.
- Calcular automáticamente el total del pedido.
- Listar pedidos registrados.
- Guardar pedidos en LocalStorage.

### Versión 2.0 avanzada

- Todo lo incluido en la versión 1.0.
- Buscar pedidos por cliente.
- Filtrar pedidos por estado.
- Cambiar estado del pedido: Pendiente, En preparación, Entregado.
- Eliminar pedidos.
- Mostrar resumen de ventas: total de pedidos, total vendido, pendientes y entregados.

## Instalación

```bash
npm install
```

## Ejecución local

```bash
npm run dev
```

Después abra la URL que muestre Vite, normalmente:

```text
http://localhost:5173
```

## Construcción del proyecto

```bash
npm run build
```

El resultado de producción se genera en la carpeta `dist/`.

## GitHub Actions

El workflow se encuentra en `.github/workflows/ci.yml`.

Se ejecuta automáticamente cuando se hace:

- `push` hacia la rama `main`.
- `pull_request` hacia la rama `main`.

El proceso de integración continua:

1. Descarga el código del repositorio.
2. Configura Node.js 20.
3. Instala dependencias con `npm install`.
4. Ejecuta `npm run build`.
5. Falla si la aplicación no compila correctamente.

## Despliegue en Vercel

Configuración recomendada en Vercel:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

URL de Vercel:

```text
Pendiente: colocar aquí la URL generada por Vercel
```

## Repositorio en GitHub

Repositorio principal para la exposición:

```text
https://github.com/Gabrielz-DevOS/sistema-pedidos-restaurante-devops
```

Repositorios anteriores creados durante la preparación:

```text
https://github.com/GabrielCarriel1/sistema-pedidos-restaurante-devops
https://github.com/cgabrielcarrielm/sistema-pedidos-restaurante-devops
```

## Estructura del proyecto

```text
src/
  components/
    Header.jsx
    OrderForm.jsx
    OrderList.jsx
    OrderCard.jsx
    ProductSelector.jsx
    OrderFilters.jsx
    SalesSummary.jsx
  data/
    menu.js
  utils/
    orderUtils.js
    storage.js
  App.jsx
  main.jsx
  styles.css
docs/
  control-cambios.md
  versiones.md
  exposicion.md
  guia-demostracion.md
.github/
  workflows/
    ci.yml
```

## Reutilización de software

Componentes reutilizables:

- `Header`: encabezado general del sistema.
- `OrderForm`: formulario para registrar pedidos.
- `ProductSelector`: selector de productos del menú.
- `OrderList`: listado de pedidos.
- `OrderCard`: tarjeta individual de pedido.
- `OrderFilters`: filtros de búsqueda y estado.
- `SalesSummary`: resumen de ventas.

Funciones reutilizables:

- `calculateOrderTotal()`: calcula el total de un pedido.
- `filterOrders()`: filtra pedidos por cliente y estado.
- `saveOrders()` y `getOrders()`: guardan y recuperan información de LocalStorage.
- `updateOrderStatus()`: actualiza el estado de un pedido.
- `validateOrder()`: valida datos antes de registrar un pedido.

Estas piezas podrían reutilizarse en sistemas simples de cafetería, tiendas pequeñas, control de ventas internas o prototipos administrativos.

## Integrantes y partes de exposición

- Integrante 1: Gestión del cambio.
- Integrante 2: Gestión de versiones.
- Integrante 3: Construcción e integración continua.
- Integrante 4: Despliegue continuo.
- Integrante 5: Reutilización de software y variabilidad.

## Documentos académicos

- `docs/control-cambios.md`: registro formal de cambios.
- `docs/versiones.md`: explicación de v1.0 y v2.0.
- `docs/exposicion.md`: guion dividido por estudiante.
- `docs/guia-demostracion.md`: pasos para demostrar el proyecto frente al docente.
