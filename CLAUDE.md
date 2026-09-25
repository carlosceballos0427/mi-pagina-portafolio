# Portafolio Personal de Carlos

Sitio web de portafolio personal de Carlos (Ingeniero Industrial, especialista en
BI/Big Data, analista de datos con Python/Django). Construido con Astro + React.
Debe proyectar imagen profesional para el sector de análisis de datos.

## Stack

- **Astro** + **TypeScript**
- **React** (vía `@astrojs/react`) para componentes interactivos
- **Tailwind CSS v4** (vía `@tailwindcss/vite`)
- **motion** (animaciones) y **lucide-react** (iconos)

## Comandos (en WSL/Ubuntu)

```bash
npm run dev       # servidor de desarrollo (puerto 4321)
npm run build     # build de producción a dist/
npm run preview   # previsualizar el build
```

El preview de Claude usa `.claude/launch.json`.

## Estructura

- `src/pages/` — páginas (por ahora `index.astro`)
- `src/components/` — componentes (usar `.astro` para estático, `.tsx` para interactivo)
- `public/` — assets estáticos

## Reglas de estilo de código (OBLIGATORIAS)

Todo el código debe quedar documentado en español:

- **Cada componente/función** → comentario de encabezado con qué hace y qué props recibe.
- **Cada bucle** (`.map()`, `for`) → comentario de una línea: qué recorre y para qué.
- **Cada expresión compleja** (animaciones de motion, hooks) → comentario explicativo.
- **Bloques de HTML/CSS/JS** → comentario de sección describiendo su propósito.

## Contexto adicional

- Es la carta de presentación profesional del autor: máximo cuidado en diseño,
  ortografía y responsive.
- Idioma del proyecto: español (respuestas, comentarios y documentación en español).

## Lecciones aprendidas (leer antes de trabajar)

- `LECCIONES.md` (esta app) y `../LECCIONES_GENERALES.md` (todas las apps): lo que
  ya falló una vez y cómo evitarlo. Aplicarlo de entrada.
- Al cerrar un incidente o un cambio grande, anotar en `LECCIONES.md` qué pasó,
  cómo se arregló y qué lo evita la próxima vez.
