/**
 * Bitácora Rosina — feed cronológico.
 * REGLA: las entradas nuevas van AL PRINCIPIO del array (más reciente arriba).
 * at = fecha/hora ISO con zona -03:00 (Uruguay).
 */
window.BITACORA_CHANGELOG = [
  {
    at: "2026-08-14T10:04:00-03:00",
    module: "Bitácora",
    moduleHref: "index.html",
    title: "Hub de seguimiento de implementaciones",
    status: "done",
    details: [
      "Sitio estático con feed cronológico, sidebar por módulo y publicación en GitHub Pages",
      "Paleta cream, burgundy, plum, tan y sage; tipografía Fraunces y Source Sans 3",
      "Cada avance del sistema se registra acá y queda visible en el hub",
    ],
  },
  {
    at: "2026-08-14T10:00:00-03:00",
    module: "Tablero",
    moduleHref: "propuestas/tablero.html",
    title: "Tabs del ciclo P.A.P.A. con datos de prueba",
    status: "done",
    details: [
      "El auditor recorre Tablero, Calendarios, Solicitudes, Revisión, Operarios, Vehículos e Informes",
      "Cada pantalla muestra el alcance del tab con indicadores y listas de ejemplo",
      "Sirve para recorrer el ciclo completo antes de conectar datos reales",
    ],
  },
  {
    at: "2026-08-14T09:50:00-03:00",
    module: "Tablero",
    moduleHref: "propuestas/tablero.html",
    title: "Shell del auditor con paleta y tipografía del sistema",
    status: "done",
    details: [
      "Menú lateral plum, wordmark Rosina y pie Auditorías P.A.P.A.",
      "Colores tomados de la paleta: cream, tan, burgundy, plum, sage y mauve",
      "Títulos en Fraunces y cuerpo en Source Sans 3",
    ],
  },
  {
    at: "2026-08-14T09:40:00-03:00",
    module: "Informes",
    moduleHref: "propuestas/informes.html",
    title: "Exportación PDF del Resumen Rectificado",
    status: "proposal",
    details: [
      "El cierre del ciclo para el cliente se entrega como Resumen Rectificado en PDF",
      "El informe individual a cada contratista también podrá exportarse",
      "Queda fuera de la primera entrega de pantallas",
    ],
  },
  {
    at: "2026-08-14T09:30:00-03:00",
    module: "Calendarios",
    moduleHref: "propuestas/calendarios.html",
    title: "Avisos automáticos por correo y WhatsApp",
    status: "proposal",
    details: [
      "Recordatorio a cada contratista de la fecha límite para enviar documentos",
      "Canales: correo y WhatsApp, disparados según las ventanas del calendario activo",
      "Complementa el seguimiento manual del ciclo",
    ],
  },
];
