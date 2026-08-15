# Bitácora Auditare — Actualizaciones y propuestas

Sitio HTML estático para seguir el estado de las implementaciones del sistema Auditare (auditorías P.A.P.A.).

## Sitio en vivo

https://markwild1.github.io/bitacora-rosina/

Publicado con GitHub Pages desde la rama `main`.

## Cómo abrir en local

Abrí `index.html` en el navegador (doble clic o arrastrar el archivo a Chrome/Edge/Firefox). No requiere instalación ni servidor.

Ruta: `d:\bitacora-rosina\index.html`

## Feed cronológico

Los cambios se muestran **más recientes arriba**, con fecha y hora.

Para registrar uno nuevo: agregá un objeto al **principio** de `js/changelog-data.js` (`at` en ISO `-03:00`).

## Contenido

| Archivo | Uso |
|---------|-----|
| `index.html` | Hub + feed cronológico |
| `js/changelog-data.js` | Entradas del feed (apilar arriba) |
| `js/changelog.js` | Render del feed |
| `propuestas/tablero.html` | Feed Tablero |
| `propuestas/calendarios.html` | Feed Calendarios |
| `propuestas/solicitudes.html` | Feed Solicitudes |
| `propuestas/revision.html` | Feed Revisión |
| `propuestas/operarios.html` | Feed Operarios |
| `propuestas/vehiculos.html` | Feed Vehículos |
| `propuestas/informes.html` | Feed Informes |
| `propuestas/_plantilla.html` | Plantilla para nuevas propuestas |
| `css/styles.css` | Tipografía y paleta Auditare compartida |

## Estados

- **Hecho** — ya implementado y disponible
- **En curso** — en desarrollo
- **Propuesta** — documentado, aún no iniciado
- **Fuera de alcance** — explícitamente excluido de la fase actual

## Diseño

Paleta y tipografía tomadas del sistema:

- Fraunces (títulos)
- Source Sans 3 (cuerpo)
- Cream `#ece7e1`, tan `#c99d7a`, burgundy `#78353e`, plum `#644c5c`, sage `#839389`, mauve `#c5b1b2`, tinta `#2c2428`

## Cómo agregar una propuesta nueva

1. Copiá `propuestas/_plantilla.html` con un nombre descriptivo.
2. Completá título, resumen, estado y alcance.
3. Sumá el ítem en la sección **Propuestas** del menú (todas las páginas).
4. Registrá la entrada en `js/changelog-data.js` (arriba del array).
