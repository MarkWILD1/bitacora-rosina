# Manual de marca AUDITA

Fuente: board `img/audita-marca.png` (muestreado píxel a píxel).  
Nombre oficial: **AUDITA**. El wordmark del board original dice “AUDITITA” por artefactos de generación; la marca se escribe AUDITA y conserva la A con tilde.

Sitio visual: [propuestas/marca.html](propuestas/marca.html)

## Identidad

Software de auditoría laboral.  
Firmas: Cra. Rosina Muslera | Cra. Gabriela Baraibar.

### Construcciones

| Pieza | Uso |
| --- | --- |
| Wordmark | AUDITA en vino, A custom (pico + tilde rosa). Fondos claros. |
| Isotipo | Cuadrado redondeado vino, A marfil + tilde rosa. App icon, favicon, avatar. |
| Lockup | Isotipo + AUDITA + “Software de auditoría laboral”. |

Zona de respiro: un “A” de alto a cada lado del wordmark. No distorsionar, no recolorear la tilde, no poner el isotipo sobre fondos de bajo contraste.

## Voz

- Claim: **Controlá. Verificá. Cumplí.**
- Pilares: Control · Cumplimiento · Tranquilidad
- Rubro: Software de auditoría laboral

## Paleta

Todos los hex salen del board. RGB entre paréntesis.

### Primarios

| Nombre | Hex | RGB | Rol |
| --- | --- | --- | --- |
| Vino wordmark | `#481A41` | 72, 26, 65 | Letras del logo, títulos |
| Vino icono | `#411D31` | 65, 29, 49 | Fondo del isotipo y sidebar del producto |
| Rosa tilde | `#C89194` | 200, 145, 148 | Check de la A en el wordmark |
| Rosa icono | `#D4A2A6` | 212, 162, 166 | Check del isotipo (un tono más claro) |
| Marfil | `#FAF7F6` | 250, 247, 246 | Canvas claro del board |

### Superficies

| Nombre | Hex | RGB | Rol |
| --- | --- | --- | --- |
| Canvas blush | `#F2E6E9` | 242, 230, 233 | Fondo derecho / dashboard |
| Superficie UI | `#F8F4F4` | 248, 244, 244 | Cards del laptop |
| Mauve claro | `#EBE4E6` | 235, 228, 230 | Superficie intermedia |
| Track | `#DDD3D4` | 221, 211, 212 | Rieles de progreso, bordes suaves |
| Rosa pálido | `#E5D8D9` | 229, 216, 217 | Relleno secundario |
| KPI menta | `#E5E8E1` | 229, 232, 225 | Tile de indicador (cumplido) |
| KPI durazno | `#EBD6CC` | 235, 214, 204 | Tile de indicador (en revisión) |
| KPI blush | `#F1DFE2` | 241, 223, 226 | Tile de indicador (pendiente) |
| KPI lila | `#ECE5EB` | 236, 229, 235 | Tile de indicador (completo / neutro) |

### Semánticos

| Nombre | Hex | RGB | Rol |
| --- | --- | --- | --- |
| Sage cumplimiento | `#788F74` | 120, 143, 116 | Barras de progreso, éxito |
| Sage oscuro | `#6D876B` | 109, 135, 107 | Progreso medio / 60–75 % |
| Terracota alerta | `#BE7F5F` | 190, 127, 95 | Triángulo de pendiente / warning |
| Menta acento | `#B3C0AF` | 179, 192, 175 | Ícono sobre KPI menta |
| Durazno acento | `#DFC0B1` | 223, 192, 177 | Ícono sobre KPI durazno |
| Blush acento | `#DBB1B6` | 219, 177, 182 | Ícono sobre KPI blush |
| Lila acento | `#C6B7C9` | 198, 183, 201 | Ícono sobre KPI lila |

### Apoyo

| Nombre | Hex | RGB | Rol |
| --- | --- | --- | --- |
| Tinta profunda | `#24161D` | 36, 22, 29 | Sombra, texto máximo |
| Panel oscuro | `#4C2A3A` | 76, 42, 58 | Panel de campaña / foto |
| Plum medio | `#6D5159` | 109, 81, 89 | Texto secundario sobre claro |
| Mauve | `#AC999D` | 172, 153, 157 | Chrome secundario |
| Mauve suave | `#C9BBC2` | 201, 187, 194 | Divisores, iconografía liviana |
| Rosa polvo | `#C9B3B0` | 201, 179, 176 | Apoyo blush |
| Taupe plum | `#957A86` | 149, 122, 134 | Midtone de interfaz |
| Taupe escritorio | `#8C6B71` | 140, 107, 113 | Solo foto del board; no es color de UI |

## Tipografía

- **Wordmark:** display de alto contraste. La A es custom; el resto sigue el mismo peso y tracking amplio.
- **Claims y títulos de campaña:** display (Fraunces en este hub).
- **UI y cuerpo:** sans geométrica (Source Sans 3 en este hub). Tracking normal, interlineado holgado.
- **Rótulos / pilares:** sans en versales o letter-spacing amplio (`Control · Cumplimiento · Tranquilidad`).

## Aplicación UI (del mockup)

- Sidebar: vino icono `#411D31`, texto marfil.
- Canvas: blush `#F2E6E9` o marfil `#FAF7F6`.
- Cards: superficie UI `#F8F4F4`.
- Semáforo: sage para al día, terracota para alerta. No usar verde neón ni rojo puro.
- Indicadores KPI: los cuatro tintes pálidos de arriba, no gris neutro.

## Fuera de alcance

Este documento no cambia los tokens actuales de la app Next.js (`#ece7e1`, `#78353e`, `#644c5c`). Es la fuente para cuando se aplique AUDITA al producto.
