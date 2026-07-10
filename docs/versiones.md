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

- `main`: rama principal estable.
- `develop`: rama de integración.
- `feature/registro-pedidos`: rama asociada al registro básico.
- `feature/busqueda-pedidos`: rama asociada a búsqueda y filtros.
- `feature/resumen-ventas`: rama asociada al resumen de ventas.

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
