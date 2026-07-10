# Gestión de Versiones

El proyecto utiliza Git para controlar el historial de cambios y tags para identificar versiones importantes.

## Versión 1.0

La versión `v1.0` representa la versión básica del sistema.

Incluye:

- Registro de pedidos.
- Listado de pedidos.
- Selección de productos del menú.
- Cálculo automático del total.
- Persistencia local con LocalStorage.

Esta versión permite demostrar la construcción inicial de la aplicación y el primer alcance aprobado.

## Versión 2.0

La versión `v2.0` representa la versión avanzada del sistema.

Incluye todo lo de `v1.0` más:

- Búsqueda de pedidos por cliente.
- Filtro de pedidos por estado.
- Cambio de estado del pedido.
- Eliminación de pedidos.
- Resumen de ventas.

Esta versión permite demostrar cómo una solicitud de cambio se convierte en una nueva versión funcional del sistema.

## Comparación funcional v1.0 vs v2.0

| Funcionalidad | v1.0 | v2.0 |
|---|---|---|
| Registrar pedidos | ✅ | ✅ |
| Listar pedidos | ✅ | ✅ |
| Seleccionar productos del menú | ✅ | ✅ |
| Cálculo automático del total | ✅ | ✅ |
| Persistencia con LocalStorage | ✅ | ✅ |
| Búsqueda de pedidos por cliente | ❌ | ✅ |
| Filtro de pedidos por estado | ❌ | ✅ |
| Cambio de estado del pedido | ❌ | ✅ |
| Eliminación de pedidos | ❌ | ✅ |
| Resumen de ventas | ❌ | ✅ |

## Ramas recomendadas para mostrar

- `main`: rama principal estable. Solo recibe código revisado y aprobado.
- `develop`: rama de integración. Aquí se acumulan los cambios antes de pasar a `main`.
- `feature/registro-pedidos`: rama donde se desarrolló el registro de pedidos (CH-001 y CH-002).
- `feature/busqueda-pedidos`: rama donde se desarrolló la búsqueda y filtros (CH-003 y CH-004).
- `feature/resumen-ventas`: rama donde se desarrolló el resumen de ventas (CH-005).

## Flujo de ramas de trabajo

El proyecto siguió este flujo de integración:

```
feature/registro-pedidos  ──┐
feature/busqueda-pedidos  ──┼──► develop ──► main
feature/resumen-ventas    ──┘
```

Pasos del flujo:

1. Se crea una rama `feature/*` a partir de `develop` para cada nuevo cambio solicitado.
2. Se desarrolla e implementa el cambio dentro de la rama `feature/*`.
3. Al completarse, la rama se fusiona hacia `develop` mediante un merge.
4. Cuando `develop` contiene una versión estable y completa, se fusiona hacia `main` y se crea un tag de versión.

## Comandos útiles

Ver historial:

```bash
git log --oneline --decorate --graph --all
```

Ver tags:

```bash
git tag
```

Comparar versiones localmente:

```bash
git diff v1.0..v2.0 -- src
```

Ver archivos de la versión básica:

```bash
git checkout v1.0
```

Volver a la versión actual:

```bash
git checkout main
```

## Comparación entre versiones en GitHub

Después de subir el repositorio a GitHub, abrir:

```text
https://github.com/Gabrielz-DevOS/sistema-pedidos-restaurante-devops/compare/v1.0...v2.0
```

En esa pantalla se puede mostrar:

- Archivos modificados.
- Componentes agregados.
- Funciones nuevas.
- Diferencia entre versión básica y versión avanzada.

## Explicación para la exposición

La versión `v1.0` muestra el sistema mínimo aprobado. La versión `v2.0` muestra cómo el sistema evolucionó por solicitudes de cambio: búsqueda, filtros, estados, eliminación y resumen. Git permite conservar ambas versiones, compararlas y regresar a una versión anterior si fuera necesario.

## Política de versionado

El proyecto sigue un esquema de versiones `MAYOR.MENOR`:

| Tipo de cambio | Cuándo aplicarlo | Ejemplo |
|---|---|---|
| Versión mayor (X.0) | Cuando se agregan funcionalidades significativas nuevas o se refactoriza la arquitectura | `v1.0 → v2.0` |
| Versión menor (X.Y) | Cuando se corrigen errores o se hacen mejoras pequeñas sin cambiar el alcance | `v2.0 → v2.1` |

Criterios para crear un nuevo tag de versión:

1. El código en `develop` está probado y funciona correctamente.
2. Se fusionó `develop` hacia `main`.
3. Se creó el tag con `git tag vX.Y` y se publicó con `git push origin vX.Y`.
4. Se actualizaron los documentos de la carpeta `docs/` para reflejar la nueva versión.
