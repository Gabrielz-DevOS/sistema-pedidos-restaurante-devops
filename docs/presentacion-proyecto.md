xº# Presentación del Proyecto

## 1. Nombre del proyecto

**Implementación de un Entorno DevOps para una Aplicación Simple**

Caso de estudio:

**Sistema de Pedidos de Restaurante**

## 2. Objetivo del proyecto

El objetivo del proyecto es demostrar cómo la Gestión de la Configuración de Software ayuda a controlar cambios, versiones, construcción, integración continua y despliegue continuo de una aplicación web.

Para esto se creó una aplicación simple de restaurante usando:

- React
- Vite
- JavaScript
- CSS
- LocalStorage
- Git y GitHub
- GitHub Actions
- Render

La aplicación no usa backend ni base de datos externa. Toda la información se guarda localmente en el navegador mediante LocalStorage.

## 3. Funcionalidad del sistema

El sistema permite gestionar pedidos de un restaurante.

Funcionalidades principales:

- Registrar pedidos.
- Seleccionar productos del menú.
- Calcular automáticamente el total.
- Guardar pedidos en LocalStorage.
- Listar pedidos registrados.
- Buscar pedidos por cliente.
- Filtrar pedidos por estado.
- Cambiar estado del pedido.
- Eliminar pedidos.
- Ver resumen de ventas.

Estados del pedido:

- Pendiente.
- En preparación.
- Entregado.

Resumen de ventas:

- Total de pedidos.
- Total vendido.
- Pedidos pendientes.
- Pedidos entregados.

## 4. Tecnologías utilizadas

React se utilizó para construir la interfaz por componentes.

Vite se utilizó como herramienta de desarrollo y construcción porque permite ejecutar el proyecto de forma rápida y generar una versión optimizada para producción.

JavaScript se utilizó para la lógica del sistema.

CSS propio se utilizó para el diseño visual del sistema.

LocalStorage se utilizó para guardar los pedidos en el navegador sin necesidad de una base de datos externa.

Git se utilizó para controlar versiones.

GitHub se utilizó para alojar el repositorio y compartir el código.

GitHub Actions se utilizó para la integración continua.

Render se utilizó para el despliegue continuo.

## 5. Estructura del proyecto

La aplicación está organizada en carpetas para separar responsabilidades.

```text
src/
  components/
  data/
  utils/
  App.jsx
  main.jsx
  styles.css
docs/
.github/workflows/
render.yaml
```

Componentes principales:

- `Header.jsx`: encabezado del sistema.
- `OrderForm.jsx`: formulario para registrar pedidos.
- `ProductSelector.jsx`: selección de productos.
- `OrderList.jsx`: listado de pedidos.
- `OrderCard.jsx`: tarjeta individual de pedido.
- `OrderFilters.jsx`: búsqueda y filtros.
- `SalesSummary.jsx`: resumen de ventas.

Funciones reutilizables:

- `calculateOrderTotal()`
- `filterOrders()`
- `updateOrderStatus()`
- `validateOrder()`
- `getOrders()`
- `saveOrders()`

## 6. Gestión del cambio

La gestión del cambio se documentó en:

```text
docs/control-cambios.md
```

En ese archivo se registran los cambios solicitados, el motivo, responsable, fecha de aprobación y estado.

Ejemplo:

El cliente solicitó agregar búsqueda de pedidos para encontrar rápidamente pedidos por nombre del cliente. Ese cambio se registró como `CH-003` y se implementó en la versión avanzada del sistema.

Esto demuestra que los cambios no se realizan de forma improvisada, sino que quedan registrados, aprobados y relacionados con versiones del proyecto.

## 7. Gestión de versiones

La gestión de versiones se realizó con Git y GitHub.

Se crearon commits para guardar el historial del proyecto.

Se crearon ramas para separar el trabajo:

- `main`
- `develop`
- `feature/registro-pedidos`
- `feature/busqueda-pedidos`
- `feature/resumen-ventas`

Se crearon tags para marcar versiones importantes:

- `v1.0`: versión básica.
- `v2.0`: versión avanzada.

Versión 1.0:

- Registrar pedidos.
- Listar pedidos.
- Seleccionar productos.
- Calcular total.
- Guardar en LocalStorage.

Versión 2.0:

- Búsqueda por cliente.
- Filtro por estado.
- Cambio de estado.
- Eliminación de pedidos.
- Resumen de ventas.

Comparación entre versiones:

```text
https://github.com/Gabrielz-DevOS/sistema-pedidos-restaurante-devops/compare/v1.0...v2.0
```

## 8. Construcción del sistema

Para ejecutar el sistema localmente se usan estos comandos:

```bash
npm install
npm run dev
```

Para construir la versión de producción:

```bash
npm run build
```

El comando `npm run build` genera la carpeta:

```text
dist/
```

Esa carpeta contiene los archivos optimizados que luego se publican en Render.

## 9. Integración continua

La integración continua se configuró con GitHub Actions.

Archivo:

```text
.github/workflows/ci.yml
```

El workflow se ejecuta automáticamente cuando se hace un push hacia la rama `main`.

El proceso realiza estos pasos:

1. Descarga el código del repositorio.
2. Configura Node.js.
3. Instala dependencias.
4. Ejecuta `npm run build`.
5. Marca la ejecución como exitosa si el proyecto compila correctamente.

Esto demuestra integración continua porque cada cambio subido al repositorio se valida automáticamente.

Página de Actions:

```text
https://github.com/Gabrielz-DevOS/sistema-pedidos-restaurante-devops/actions
```

## 10. Despliegue continuo

El despliegue continuo se realizó con Render.

Render está conectado al repositorio de GitHub. Cuando se sube un cambio a `main`, Render toma el código, ejecuta la construcción y publica la nueva versión.

Archivo de configuración:

```text
render.yaml
```

Configuración principal:

```text
buildCommand: npm run build
staticPublishPath: ./dist
branch: main
```

Esto significa que Render:

1. Toma el código desde GitHub.
2. Ejecuta `npm run build`.
3. Publica la carpeta `dist`.
4. Actualiza la URL pública del sistema.

Esto demuestra despliegue continuo porque el proceso de publicación se automatiza después de subir cambios.

## 11. Flujo DevOps utilizado

El flujo completo es:

```text
Cambio en el código
Commit en Git
Push a GitHub
GitHub Actions ejecuta npm run build
Si la integración continua pasa, Render despliega la aplicación
La URL pública se actualiza
```

Comando usado para demostrarlo:

```bash
git add .
git commit -m "chore: cambio de demostracion"
git push github-actions-demo main
```

## 12. Reutilización de software

El sistema aplica reutilización porque divide la lógica y la interfaz en piezas independientes.

Ejemplos:

- `ProductSelector.jsx` puede reutilizarse en otros sistemas de ventas.
- `SalesSummary.jsx` puede reutilizarse en otros paneles administrativos.
- `calculateOrderTotal()` puede reutilizarse en cualquier sistema que calcule totales.
- `filterOrders()` puede reutilizarse para buscar pedidos o registros.
- `storage.js` puede reutilizarse para guardar datos simples en LocalStorage.

Esto evita repetir código y facilita el mantenimiento.

## 13. Variabilidad

La variabilidad se demuestra con dos versiones del mismo sistema.

Versión básica `v1.0`:

- Permite registrar pedidos.
- Permite listar pedidos.
- Calcula el total.

Versión avanzada `v2.0`:

- Agrega búsqueda.
- Agrega filtros.
- Agrega cambio de estado.
- Agrega eliminación.
- Agrega resumen de ventas.

Esto demuestra que un mismo producto puede tener variantes según las necesidades del cliente.

## 14. Demostración práctica sugerida

1. Abrir la aplicación desplegada en Render.
2. Registrar un pedido.
3. Seleccionar productos.
4. Mostrar el total calculado.
5. Cambiar el estado del pedido.
6. Buscar el pedido por cliente.
7. Mostrar el resumen de ventas.
8. Abrir GitHub y mostrar commits, ramas y tags.
9. Abrir GitHub Actions y mostrar una ejecución exitosa.
10. Abrir Render y mostrar el despliegue.
11. Hacer un cambio pequeño.
12. Ejecutar commit y push.
13. Mostrar que GitHub Actions se ejecuta.
14. Mostrar que Render despliega la nueva versión.

## 15. Frase de cierre

Con este proyecto demostramos que la Gestión de la Configuración de Software permite controlar el ciclo de vida de una aplicación: desde el registro de cambios y versiones, hasta la construcción, integración continua, despliegue continuo, reutilización y variabilidad del sistema.
