# SmartPark — Landing Page

Landing page del proyecto **SmartPark**, desarrollado por el equipo del curso **1ASI0728** (UPC, 2026-01).

## Descripción

Sitio de presentación de SmartPark: plataforma SaaS de gestión inteligente de estacionamientos con **gemelo digital 3D** para centros comerciales.

## Stack

- [React](https://react.dev/) 19 + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) 6
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Lucide React](https://lucide.dev/) (iconos)

## Paleta de colores

| Token   | Hex       | Uso                          |
|---------|-----------|------------------------------|
| cream   | `#F2EABC` | Fondos hero, acentos suaves  |
| slate   | `#54736E` | Texto secundario             |
| teal    | `#194756` | Marca, títulos, footer       |
| ink     | `#080000` | Texto principal              |
| coral   | `#FF3B58` | CTAs y destacados            |

## Estructura del proyecto

```
src/
├── main.tsx
├── App.tsx
├── index.css
├── data/
│   └── content.ts          # Textos ES / EN
├── hooks/
│   └── useLanguage.ts
└── components/
    ├── layout/
    │   ├── Header.tsx
    │   └── Footer.tsx
    ├── sections/
    │   ├── Hero.tsx
    │   ├── Problem.tsx
    │   ├── OperatorFeatures.tsx
    │   ├── DriverFeatures.tsx
    │   ├── Pricing.tsx
    │   └── Contact.tsx
    └── ui/
        ├── Button.tsx
        ├── Logo.tsx
        ├── SectionTitle.tsx
        ├── FeatureCard.tsx
        └── PricingCard.tsx
public/
└── logo-smartpark.png
```

## Desarrollo local

```bash
git clone https://github.com/upc-pre-202601-1ASI0728-10042-smartpark/landing-page.git
cd landing-page
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Scripts

| Comando        | Descripción              |
|----------------|--------------------------|
| `npm run dev`  | Servidor de desarrollo   |
| `npm run build`| Build de producción      |
| `npm run preview` | Vista previa del build |

## Repositorio

- **Organización:** [upc-pre-202601-1ASI0728-10042-smartpark](https://github.com/upc-pre-202601-1ASI0728-10042-smartpark)
- **Remoto:** `https://github.com/upc-pre-202601-1ASI0728-10042-smartpark/landing-page.git`

## Equipo

SmartPark — UPC Pregrado 2026-01

## Licencia

Proyecto académico. Consultar con el equipo antes de reutilizar el contenido fuera del curso.
