# Guía de Demostración

Esta guía indica los pasos para demostrar el proyecto frente al docente.

## Checklist de verificación previa a la exposición

Completar esta lista antes de comenzar la presentación:

- [ ] El repositorio está clonado en la computadora que se usará para exponer.
- [ ] Se ejecutó `npm install` y no hubo errores.
- [ ] Se ejecutó `npm run dev` y la aplicación abre en `http://localhost:5173`.
- [ ] Se ejecutó `npm run build` y el directorio `dist/` fue generado correctamente.
- [ ] Se verificó que GitHub Actions muestra una ejecución exitosa reciente.
- [ ] La URL de Render está abierta en el navegador y la aplicación carga correctamente.
- [ ] El archivo `docs/control-cambios.md` está abierto en VS Code listo para mostrar.
- [ ] Se tiene acceso a GitHub en el navegador con el repositorio visible.
- [ ] Se ensayó la demostración completa al menos una vez el día anterior.

## 1. Abrir el proyecto

1. Abrir Visual Studio Code.
2. Seleccionar la carpeta del proyecto.
3. Abrir una terminal integrada.

## 2. Instalar dependencias

```bash
npm install
```

Explicación:

"Este comando instala las dependencias necesarias para construir y ejecutar la aplicación React con Vite."

## 3. Ejecutar la aplicación

```bash
npm run dev
```

Abrir la URL local que indique Vite, normalmente:

```text
http://localhost:5173
```

Demostración:

1. Registrar un pedido.
2. Seleccionar productos.
3. Ver el total calculado automáticamente.
4. Confirmar que el pedido aparece en la lista.
5. Recargar la página y explicar que los datos se mantienen por LocalStorage.

## 4. Mostrar archivos principales

Abrir:

- `src/App.jsx`: estado general y coordinación de componentes.
- `src/components/OrderForm.jsx`: registro de pedidos.
- `src/components/ProductSelector.jsx`: selección de productos.
- `src/components/OrderList.jsx`: listado.
- `src/components/OrderCard.jsx`: visualización y cambio de estado.
- `src/components/OrderFilters.jsx`: búsqueda y filtros.
- `src/components/SalesSummary.jsx`: resumen de ventas.
- `src/utils/orderUtils.js`: funciones reutilizables.
- `src/utils/storage.js`: persistencia en LocalStorage.

## 5. Mostrar GitHub

En GitHub, mostrar:

- Página principal del repositorio.
- Historial de commits.
- Ramas.
- Tags `v1.0` y `v2.0`.
- Comparación entre versiones.

Comandos locales útiles:

```bash
git log --oneline --decorate --graph --all
git branch -a
git tag
```

Comparación local:

```bash
git diff v1.0..v2.0 -- src
```

Comparación en GitHub:

```text
https://github.com/Gabrielz-DevOS/sistema-pedidos-restaurante-devops/compare/v1.0...v2.0
```

## 6. Mostrar GitHub Actions

Abrir:

```text
.github/workflows/ci.yml
```

Explicar:

"Este workflow se ejecuta automáticamente en cada push y pull request hacia main. Instala dependencias y ejecuta `npm run build`. Si el proyecto no compila, la integración continua falla."

## 7. Hacer un cambio pequeño para probar CI

Ejemplo de cambio:

1. Abrir `src/components/Header.jsx`.
2. Cambiar el texto `Aplicación académica DevOps` por `Aplicación académica DevOps - Demo`.
3. Guardar el archivo.

Luego ejecutar:

```bash
npm run build
git add src/components/Header.jsx
git commit -m "chore: ajustar texto de demostracion"
git push origin main
```

En GitHub:

1. Abrir la pestaña Actions.
2. Ver la ejecución automática.
3. Esperar el resultado exitoso.

## 8. Mostrar despliegue en Render

Si todavía no está conectado:

1. Entrar a `https://render.com`.
2. Iniciar sesión con GitHub.
3. Crear un nuevo `Static Site` o un nuevo `Blueprint`.
4. Seleccionar el repositorio `Gabrielz-DevOS/sistema-pedidos-restaurante-devops`.
5. Rama: `main`.
6. Build command: `npm run build`.
7. Publish directory: `dist`.
8. Auto deploy: después de que pasen los checks de CI, si la opción está disponible.
9. Deploy.
10. Copiar la URL generada.

Después del cambio pequeño:

1. Hacer push a GitHub.
2. Abrir Render.
3. Ver el nuevo despliegue automático.
4. Abrir la URL pública y confirmar el cambio.

Explicación:

"Antes, publicar una nueva versión podía tomar horas porque había que compilar, copiar archivos y configurar el servidor manualmente. Con GitHub, GitHub Actions y Vercel, el proceso queda automatizado desde el push."

## 9. Demostrar reutilización

Mostrar:

- `calculateOrderTotal()` en `src/utils/orderUtils.js`.
- `filterOrders()` en `src/utils/orderUtils.js`.
- `saveOrders()` y `getOrders()` en `src/utils/storage.js`.
- `ProductSelector.jsx` como componente reutilizable.
- `SalesSummary.jsx` como componente reutilizable.

Explicación:

"Estas funciones y componentes no dependen de una pantalla específica. Podrían reutilizarse en otro sistema de ventas, cafetería o inventario simple."

## 10. Demostrar variabilidad

Mostrar:

- Tag `v1.0`: versión básica.
- Tag `v2.0`: versión avanzada.
- Documento `docs/versiones.md`.

Explicación:

"La variabilidad se demuestra porque el mismo sistema tiene una versión básica y una avanzada. La versión básica permite registrar y listar pedidos. La versión avanzada agrega búsqueda, filtros, estados, eliminación y resumen."
