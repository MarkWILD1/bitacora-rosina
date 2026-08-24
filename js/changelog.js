/**
 * Renderiza el feed cronológico (más reciente arriba).
 * Soporta filtro por módulo: <div id="changelog" data-module="tablero">
 */
(function () {
  "use strict";

  const STATUS_LABEL = {
    done: "Hecho",
    progress: "En curso",
    proposal: "Propuesta",
    out: "Fuera de alcance",
  };

  const STATUS_CLASS = {
    done: "badge--done",
    progress: "badge--progress",
    proposal: "badge--proposal",
    out: "badge--out",
  };

  const MODULE_ALIASES = {
    empresas: ["empresas"],
    tablero: ["tablero"],
    calendarios: ["calendarios"],
    solicitudes: ["solicitudes"],
    revision: ["revision"],
    documentos: ["documentos"],
    operarios: ["operarios"],
    vehiculos: ["vehiculos"],
    informes: ["informes"],
    bitacora: ["bitacora"],
    comercial: ["comercial"],
  };

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function linkify(escaped) {
    return escaped.replace(/https?:\/\/[^\s<]+/g, (url) => {
      const href = url.replace(/[.,;:)]+$/, "");
      const trailing = url.slice(href.length);
      return (
        `<a class="changelog-entry__link" href="${href}" target="_blank" rel="noopener noreferrer">${href}</a>` +
        trailing
      );
    });
  }

  function formatStamp(iso) {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return { date: "—", time: "—" };
    const date = new Intl.DateTimeFormat("es-UY", {
      timeZone: "America/Montevideo",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(d);
    const time = new Intl.DateTimeFormat("es-UY", {
      timeZone: "America/Montevideo",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(d);
    return { date, time };
  }

  function inPropuestasFolder() {
    return /(?:^|\/)propuestas(?:\/|$)/i.test(window.location.pathname);
  }

  function resolveHref(href) {
    if (!href) return "";
    if (/^https?:\/\//i.test(href)) return href;
    if (!inPropuestasFolder()) return href;
    if (href === "index.html" || href.startsWith("index.html?")) {
      return "../" + href;
    }
    if (href.startsWith("propuestas/")) {
      return href.slice("propuestas/".length);
    }
    return href;
  }

  function normalizeToken(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "");
  }

  function entryTokens(entry) {
    const tokens = new Set();
    const href = entry.moduleHref || "";
    const file = href.split("/").pop() || "";
    const base = file.replace(/\.html$/i, "");
    if (base) tokens.add(normalizeToken(base));
    if (entry.module) tokens.add(normalizeToken(entry.module));
    return tokens;
  }

  function matchesModule(entry, filter) {
    if (!filter) return true;
    const wanted = MODULE_ALIASES[filter] || [filter];
    const wantedNorm = wanted.map(normalizeToken);
    const tokens = entryTokens(entry);
    return wantedNorm.some((w) => tokens.has(w));
  }

  function pickList(value) {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    return [];
  }

  function render() {
    const root = document.getElementById("changelog");
    if (!root) return;

    const filter = (root.getAttribute("data-module") || "").trim().toLowerCase();
    const all = Array.isArray(window.BITACORA_CHANGELOG)
      ? window.BITACORA_CHANGELOG.slice()
      : [];
    const entries = all
      .filter((entry) => matchesModule(entry, filter))
      .sort((a, b) => new Date(b.at) - new Date(a.at));

    if (!entries.length) {
      root.innerHTML =
        '<p class="empty-slot">Aún no hay implementaciones registradas.</p>';
      root.dispatchEvent(new CustomEvent("changelog:ready", { bubbles: true }));
      return;
    }

    const frag = document.createDocumentFragment();

    entries.forEach((entry, index) => {
      const status = entry.status || "done";
      const stamp = formatStamp(entry.at);
      const article = document.createElement("article");
      article.className =
        "changelog-entry" + (index === 0 ? " changelog-entry--latest" : "");
      article.setAttribute("data-at", entry.at);

      const details = pickList(entry.details);
      const detailsHtml = details.length
        ? `<ul class="changelog-entry__details">${details
            .map((d) => `<li>${linkify(escapeHtml(d))}</li>`)
            .join("")}</ul>`
        : "";

      const moduleLabel = entry.module || "Sistema";
      const href = resolveHref(entry.moduleHref);
      const moduleLink = href
        ? `<a class="changelog-entry__module" href="${escapeHtml(href)}">${escapeHtml(moduleLabel)}</a>`
        : `<span class="changelog-entry__module">${escapeHtml(moduleLabel)}</span>`;

      const summary = entry.summary ? escapeHtml(entry.summary) : "";

      article.innerHTML = `
        <div class="changelog-entry__rail" aria-hidden="true">
          <span class="changelog-entry__dot"></span>
        </div>
        <div class="changelog-entry__card">
          <header class="changelog-entry__head">
            <time class="changelog-entry__when" datetime="${escapeHtml(entry.at)}">
              <span class="changelog-entry__date">${escapeHtml(stamp.date)}</span>
              <span class="changelog-entry__time">${escapeHtml(stamp.time)}</span>
            </time>
            <span class="badge ${STATUS_CLASS[status] || "badge--done"}">${escapeHtml(
              STATUS_LABEL[status] || "Hecho"
            )}</span>
          </header>
          <div class="changelog-entry__meta">${moduleLink}</div>
          <h2 class="changelog-entry__title">${escapeHtml(entry.title || "—")}</h2>
          ${summary ? `<p class="changelog-entry__summary">${summary}</p>` : ""}
          ${detailsHtml}
        </div>
      `;

      frag.appendChild(article);
    });

    root.replaceChildren(frag);
    root.dispatchEvent(new CustomEvent("changelog:ready", { bubbles: true }));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
