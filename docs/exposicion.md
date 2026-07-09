# Guion de Exposición

Este guion divide la demostración entre cinco estudiantes. Cada estudiante debe explicar una parte y mostrar una evidencia práctica.

## Estudiante 1: Gestión del cambio

Qué debe decir:

"La Gestión de la Configuración de Software nos ayuda a registrar y controlar los cambios solicitados. En este proyecto, cada cambio tiene un código, motivo, responsable, fecha de aprobación y estado."

Qué debe mostrar:

- Archivo `docs/control-cambios.md`.
- Tabla de cambios `CH-001` a `CH-005`.
- Ejemplo del cambio `CH-003`: agregar búsqueda de pedidos.

Demostración práctica:

1. Abrir `docs/control-cambios.md`.
2. Explicar el cambio `CH-003`.
3. Abrir la aplicación.
4. Registrar un pedido con un cliente.
5. Buscar ese pedido por nombre.

## Estudiante 2: Gestión de versiones

Qué debe decir:

"Git nos permite guardar el historial del proyecto. Usamos tags para marcar la versión básica `v1.0` y la versión avanzada `v2.0`."

Qué debe mostrar:

- Repositorio en GitHub.
- Historial de commits.
- Tags `v1.0` y `v2.0`.
- Comparación entre versiones.

Demostración práctica:

1. Ejecutar `git log --oneline --decorate --graph --all`.
2. Ejecutar `git tag`.
3. En GitHub, abrir la comparación `v1.0...v2.0`.
4. Explicar qué archivos se agregaron o modificaron.

## Estudiante 3: Construcción e integración continua

Qué debe decir:

"La construcción verifica que el proyecto pueda compilarse correctamente. GitHub Actions automatiza esa verificación cada vez que se sube código a la rama principal."

Qué debe mostrar:

- Visual Studio Code con el proyecto abierto.
- Terminal ejecutando `npm install`.
- Terminal ejecutando `npm run dev`.
- Archivo `.github/workflows/ci.yml`.
- Pestaña Actions en GitHub.

Demostración práctica:

1. Ejecutar `npm install`.
2. Ejecutar `npm run build`.
3. Abrir `.github/workflows/ci.yml`.
4. Hacer un commit pequeño.
5. Hacer push.
6. Mostrar que GitHub Actions se ejecuta automáticamente.

## Estudiante 4: Despliegue continuo

Qué debe decir:

"Antes, publicar cambios podía tomar mucho tiempo porque había que copiar archivos manualmente. Con Vercel, cada push a GitHub genera un despliegue automático."

Qué debe mostrar:

- Proyecto importado en Vercel.
- Configuración de build: `npm run build`.
- Output directory: `dist`.
- URL pública funcionando.
- Nuevo despliegue después de un cambio pequeño.

Demostración práctica:

1. Abrir la URL de Vercel.
2. Hacer un cambio pequeño en el texto del encabezado.
3. Hacer commit y push.
4. Mostrar GitHub Actions ejecutándose.
5. Mostrar el nuevo despliegue en Vercel.

## Estudiante 5: Reutilización y variabilidad

Qué debe decir:

"El sistema está dividido en componentes y funciones reutilizables. Además, tenemos dos variantes del mismo sistema: una básica y una avanzada."

Qué debe mostrar:

- Componentes en `src/components`.
- Funciones en `src/utils/orderUtils.js`.
- Documento `docs/versiones.md`.
- Tags `v1.0` y `v2.0`.

Demostración práctica:

1. Abrir `src/components/ProductSelector.jsx` y explicar que puede reutilizarse con otros menús.
2. Abrir `src/utils/orderUtils.js` y explicar `calculateOrderTotal()` y `filterOrders()`.
3. Mostrar `v1.0` como versión básica.
4. Mostrar `v2.0` como versión avanzada.
