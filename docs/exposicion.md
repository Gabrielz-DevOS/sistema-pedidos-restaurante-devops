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

Tips de presentación:

- Apuntar con el cursor a la columna **Código** de la tabla y explicar que cada cambio tiene un identificador único, igual que en un sistema de tickets profesional.
- Si la aplicación no carga, abrir el archivo `docs/control-cambios.md` directamente en VS Code y explicar desde ahí.
- Hablar despacio al leer la tabla; el docente necesita ver que entiendes cada columna, no solo leerla.
- Mencionar que el proceso de registrar un cambio antes de implementarlo evita errores y facilita el trabajo en equipo.

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

Tips de presentación:

- GitHub Actions puede tardar entre 30 segundos y 2 minutos en ejecutarse. Preparar el historial de una ejecución exitosa anterior para mostrarla si el tiempo de espera es largo.
- Abrir `.github/workflows/ci.yml` y explicar cada sección del archivo: `on`, `jobs`, `steps`. No es necesario memorizarlo, basta con leerlo en voz alta y explicarlo.
- Si el build local falla, buscar el error en la terminal. El mensaje más común es un import mal escrito o un componente inexistente.
- Destacar que sin CI, cualquier error de compilación se descubriría tarde, quizás después de publicar.

## Estudiante 4: Despliegue continuo

Qué debe decir:

"Antes, publicar cambios podía tomar mucho tiempo porque había que copiar archivos manualmente. Con Vercel, cada push a GitHub genera un despliegue automático."

Qué debe mostrar:

- Proyecto importado en Render.
- Configuración de build: `npm run build`.
- Output directory: `dist`.
- URL pública funcionando.
- Nuevo despliegue después de un cambio pequeño.

Demostración práctica:

1. Abrir la URL de Render.
2. Hacer un cambio pequeño en el texto del encabezado.
3. Hacer commit y push.
4. Mostrar GitHub Actions ejecutándose.
5. Mostrar el nuevo despliegue en Render.

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

## Preguntas frecuentes del docente

A continuación se listan preguntas que el docente podría hacer durante la exposición, con respuestas modelo para cada integrante.

**¿Por qué usan Git en lugar de compartir archivos por correo?**

Git registra cada cambio con autor, fecha y descripción. Si algo sale mal, se puede regresar a cualquier versión anterior sin perder trabajo. Compartir por correo no tiene ese control.

**¿Qué pasa si dos personas cambian el mismo archivo al mismo tiempo?**

Git detecta el conflicto y avisa. El equipo debe resolverlo manualmente decidiendo cuál versión conservar. En este proyecto lo evitamos trabajando en ramas separadas.

**¿Por qué el proyecto usa LocalStorage en lugar de una base de datos?**

Es una aplicación académica enfocada en demostrar DevOps, no en persistencia avanzada. LocalStorage es suficiente para mostrar que los datos sobreviven a una recarga sin necesidad de servidor.

**¿Qué hace GitHub Actions exactamente?**

Cada vez que se sube código a la rama `main`, GitHub Actions descarga el código, instala las dependencias y ejecuta `npm run build`. Si el proyecto no compila, el pipeline falla y avisa al equipo antes de que el error llegue a producción.

**¿Qué diferencia hay entre integración continua y despliegue continuo?**

La integración continua verifica que el código compila y pasa pruebas automáticamente. El despliegue continuo publica el resultado en un servidor accesible al público. En este proyecto, Render hace el despliegue automático después de que CI pasa.

**¿Por qué tienen dos versiones del sistema?**

Para demostrar la variabilidad de software. El mismo sistema puede existir en una versión básica para clientes con presupuesto reducido y en una versión avanzada con más funcionalidades. Los tags de Git hacen posible acceder a cualquier versión en cualquier momento.

**¿Qué es un commit atómico?**

Un commit que contiene un solo cambio con un propósito claro. Facilita revisar el historial, revertir errores y entender qué se hizo y por qué. En este proyecto cada commit está enfocado en un cambio específico.
