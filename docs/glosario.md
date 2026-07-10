# Glosario de Términos DevOps

Este glosario define los términos técnicos utilizados en el proyecto y en la asignatura de Gestión de la Configuración de Software.

## A

**Artefacto (Artifact)**
Resultado producido por el proceso de construcción del proyecto. En este proyecto, el artefacto es el directorio `dist/` que contiene los archivos HTML, CSS y JavaScript listos para producción.

**Auto-deploy**
Funcionalidad de las plataformas de hosting (como Render) que ejecuta automáticamente un despliegue nuevo cada vez que detecta un cambio en la rama configurada del repositorio.

## B

**Branch (Rama)**
Línea de desarrollo independiente dentro de un repositorio Git. Permite trabajar en nuevas funcionalidades sin afectar el código principal. Ver también: `main`, `develop`, `feature/*`.

**Build (Construcción)**
Proceso de transformar el código fuente en un formato ejecutable o publicable. En este proyecto, `npm run build` transforma el código React en archivos estáticos optimizados.

## C

**CI (Integración Continua)**
Práctica de combinar los cambios de todos los desarrolladores en un repositorio compartido varias veces al día, verificando automáticamente que el código compila y pasa las pruebas.

**CD (Despliegue Continuo)**
Práctica de publicar automáticamente cada versión aprobada del software en un entorno de producción accesible al público.

**Commit**
Registro permanente de un conjunto de cambios en el repositorio Git. Cada commit tiene un identificador único (hash), un mensaje descriptivo, un autor y una fecha.

**Commit atómico**
Commit que contiene exactamente un cambio con un propósito único y claro. Facilita la revisión del historial y la reversión de errores.

## D

**Deploy (Despliegue)**
Proceso de publicar el artefacto construido en un servidor accesible al público. En este proyecto, Render realiza el despliegue automático.

**develop**
Rama de integración del proyecto. Recibe los cambios de las ramas `feature/*` antes de que pasen a `main`.

**dist/**
Directorio generado por `npm run build` que contiene la versión de producción de la aplicación.

## F

**feature branch**
Rama creada a partir de `develop` para desarrollar una funcionalidad específica. Cuando la funcionalidad está lista, se fusiona de vuelta a `develop`.

**Flujo de trabajo (Workflow)**
Secuencia de pasos automatizados definidos en un archivo YAML dentro de `.github/workflows/`. GitHub Actions ejecuta estos pasos cuando se cumple una condición, como un push a `main`.

## G

**GCS (Gestión de la Configuración de Software)**
Conjunto de prácticas para controlar y registrar los cambios en el software a lo largo del tiempo. Incluye control de versiones, gestión del cambio, construcción e integración.

**Git**
Sistema de control de versiones distribuido. Permite registrar el historial de cambios de un proyecto, trabajar en ramas paralelas y colaborar con otros desarrolladores.

**GitHub**
Plataforma en línea que aloja repositorios Git y ofrece herramientas de colaboración como pull requests, issues y GitHub Actions.

**GitHub Actions**
Servicio de automatización integrado en GitHub. Permite definir workflows que se ejecutan automáticamente ante eventos del repositorio.

## L

**LocalStorage**
API del navegador que permite almacenar datos de forma persistente en el dispositivo del usuario. Los datos se mantienen incluso después de cerrar el navegador. En este proyecto se usa para guardar los pedidos.

## M

**main**
Rama principal del repositorio. Contiene el código estable y aprobado del proyecto. Solo recibe cambios mediante merge desde `develop`.

**Merge**
Operación de Git que combina los cambios de una rama dentro de otra.

## P

**Pipeline**
Secuencia de etapas automatizadas que el código debe superar antes de ser publicado. En este proyecto el pipeline incluye instalación de dependencias y build.

**Push**
Comando de Git que sube los commits locales al repositorio remoto en GitHub.

## R

**Rama (Branch)**
Ver *Branch*.

**Render**
Plataforma de hosting en la nube que permite publicar sitios web estáticos. Se conecta a GitHub y despliega automáticamente cuando detecta un push a la rama configurada.

**Repositorio**
Directorio gestionado por Git que contiene el historial completo de cambios del proyecto.

## S

**SPA (Single Page Application)**
Aplicación web que carga una sola página HTML y actualiza el contenido dinámicamente sin recargar el navegador completo. Este proyecto es una SPA construida con React.

## T

**Tag**
Referencia fija a un commit específico del historial de Git. Se usa para marcar versiones importantes del proyecto. Los tags de este proyecto son `v1.0` y `v2.0`.

## V

**Vite**
Herramienta de construcción y servidor de desarrollo rápido para proyectos JavaScript modernos. En este proyecto reemplaza a Create React App y ejecuta `npm run dev` para el servidor local.

**Variabilidad**
Capacidad de un sistema de adaptarse o existir en múltiples variantes. En este proyecto la variabilidad se demuestra con las versiones `v1.0` (básica) y `v2.0` (avanzada) del sistema.
