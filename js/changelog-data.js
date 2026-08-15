/**
 * Bitácora Auditare — feed cronológico.
 * REGLA: las entradas nuevas van AL PRINCIPIO del array (más reciente arriba).
 * at = fecha/hora ISO con zona -03:00 (Uruguay).
 */
window.BITACORA_CHANGELOG = [
  {
    at: "2026-08-15T11:01:00-03:00",
    module: "Bitácora",
    moduleHref: "index.html",
    title: "La bitácora pasa a llamarse Bitácora Auditare",
    status: "done",
    details: [
      "El wordmark del encabezado y el menú lateral quedan Auditare",
      "La marca de la sidebar pasa de R a A",
      "El pie de todas las páginas dice Bitácora · Auditare",
    ],
  },
  {
    at: "2026-08-15T10:58:00-03:00",
    module: "Fases",
    moduleHref: "propuestas/fases.html",
    title: "Arranca la fase 1: diseño y maquetación de la interfaz",
    status: "progress",
    details: [
      "El desarrollo queda organizado en cuatro fases: Inicio, Backend, Prueba y Producción",
      "Fase 1 (en curso): maquetación y diseño UI de las pantallas del auditor",
      "Siguen: cableado del backend, prueba en uso directo, y salida a producción con soporte",
    ],
  },
  {
    at: "2026-08-15T10:56:00-03:00",
    module: "Calendarios",
    moduleHref: "propuestas/calendarios.html",
    title: "Al clicar un mes se ven los contratistas y los informes de ese período",
    status: "done",
    details: [
      "Cada mes de la lista abre el detalle del período debajo de la tabla",
      "Se listan todos los contratistas asociados a ese calendario",
      "Los informes quedan filtrados por el mes elegido; septiembre (borrador) muestra el vacío",
    ],
  },
  {
    at: "2026-08-15T10:55:00-03:00",
    module: "Tablero",
    moduleHref: "propuestas/tablero.html",
    title: "El wordmark de la sidebar pasa de Rosina a Auditare",
    status: "done",
    details: [
      "El nombre en el menú lateral (escritorio y móvil) queda Auditare",
      "El pie sigue diciendo Auditorías P.A.P.A.",
    ],
  },
  {
    at: "2026-08-15T10:52:00-03:00",
    module: "Documentos",
    moduleHref: "propuestas/documentos.html",
    title: "Documentos pasa al segundo lugar de la sidebar, debajo de Tablero",
    status: "done",
    details: [
      "El menú del auditor queda: Tablero, Documentos, Calendarios, Solicitudes, Revisión e Informes",
    ],
  },
  {
    at: "2026-08-15T10:50:00-03:00",
    module: "Documentos",
    moduleHref: "propuestas/documentos.html",
    title: "Tab Documentos con tres frentes: empresa, vehículos y funcionarios",
    status: "done",
    details: [
      "La sidebar del auditor suma Documentos y deja de mostrar Operarios y Vehículos como tabs sueltos",
      "Adentro hay tres pestañas: Contratista/empresa, Vehículos y Funcionarios",
      "Los padrones de flota y personal se reutilizan; las rutas viejas redirigen al frente que corresponde",
    ],
  },
  {
    at: "2026-08-15T10:45:00-03:00",
    module: "Calendarios",
    moduleHref: "propuestas/calendarios.html",
    title: "Fases del ciclo sin siglas: ENTREGA, CONTROL, RECTIFICACIÓN e INFORME FINAL",
    status: "done",
    details: [
      "La línea de tiempo, los badges y las tablas dejan de mostrar IED–FED, ICD–FCD, IRD–FRD e ICFD–FCFD",
      "La cuarta ventana pasa a llamarse INFORME FINAL en lugar de control final",
      "El cambio queda aplicado en Tablero, Calendarios, Solicitudes, Revisión y la documentación del producto",
    ],
  },
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
    title: "Avisos automáticos por correo",
    status: "proposal",
    details: [
      "Recordatorio a cada contratista de la fecha límite para enviar documentos",
      "Canal: correo, disparado según las ventanas del calendario activo",
      "Complementa el seguimiento manual del ciclo",
    ],
  },
];
