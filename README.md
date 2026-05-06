# Hermes

Landing page de una sola pantalla para Hermes — la redacción digital que nunca duerme.

## Stack

- **Next.js 15** con App Router + TypeScript
- **Tailwind CSS v4** con tokens de diseño en CSS nativo (`@theme`)
- **Framer Motion 11** para animaciones de scroll (fade-in + translate-y)
- **Google Fonts** vía `next/font` — Fraunces (serif) + Inter (sans)

---

## Instalación y desarrollo local

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el servidor de desarrollo
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el browser.

---

## Build de producción

```bash
npm run build
npm start
```

---

## Deploy en Vercel

1. Subí el repositorio a GitHub.
2. Entrá a [vercel.com](https://vercel.com) → **Add New Project**.
3. Importá el repositorio — Vercel detecta Next.js automáticamente.
4. Hacé clic en **Deploy**. No requiere variables de entorno.

---

## Deploy en Railway

1. Subí el repositorio a GitHub.
2. Entrá a [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub repo**.
3. Seleccioná el repositorio.
4. En la configuración del servicio, asegurate de tener:
   - **Build command:** `npm run build`
   - **Start command:** `npm start`
5. Railway inyecta `$PORT` automáticamente — Next.js lo respeta sin configuración extra.
6. Hacé clic en **Deploy**.

> No se requieren variables de entorno para esta landing estática.

---

## Estructura del proyecto

```
hermes-landing/
├── app/
│   ├── globals.css       # Tokens de color y fuentes (Tailwind @theme)
│   ├── layout.tsx        # Root layout, metadata SEO, carga de fuentes
│   └── page.tsx          # Composición de secciones
├── components/
│   ├── FadeIn.tsx        # Wrapper de animación (client component)
│   ├── Header.tsx        # Navbar fija con detección de scroll
│   ├── Hero.tsx          # Sección hero tipográfica
│   ├── Problem.tsx       # Bloque de problema centrado
│   ├── Pillars.tsx       # Tres pilares de valor (01 / 02 / 03)
│   ├── Cases.tsx         # Casos de uso editoriales
│   ├── Process.tsx       # Pipeline de 5 pasos (captura → publicación)
│   ├── Integrations.tsx  # Grid de integraciones y stack
│   ├── ClosingCTA.tsx    # CTA de cierre
│   └── Footer.tsx        # Footer mínimo
├── next.config.ts
├── postcss.config.mjs
├── package.json
└── tsconfig.json
```
