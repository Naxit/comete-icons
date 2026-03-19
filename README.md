# @naxit/comete-icons

**380 icônes** de l'écosystème Comète, exportées depuis Figma et distribuées sous forme de composants React typés.

## Installation

```bash
pnpm add @naxit/comete-icons
```

## Utilisation

```tsx
import { Check, ChevronRight, Dashboard } from "@naxit/comete-icons";
import "@naxit/comete-icons/styles";

<Check variant="filled" color="success" size={24} />
<ChevronRight spacing="none" color="default" />
<Dashboard variant="duotone" size={32} />
```

## Props

| Prop | Type | Défaut | Description |
|---|---|---|---|
| `variant` | `"outlined" \| "filled" \| "duotone"` | `"outlined"` | Style visuel |
| `spacing` | `"default" \| "none"` | `"default"` | ViewBox 24×24 (avec padding) ou 16×16 (sans) |
| `color` | `IconColor` | `"default"` | Couleur sémantique liée aux design tokens |
| `size` | `number` | `24` | Taille en pixels (SVG, pas de pixelisation) |
| `className` | `string` | — | Classes CSS additionnelles |

15 couleurs sémantiques disponibles : `default`, `disabled`, `inverted`, `on-warning`, `warning`, `critical`, `success`, `brand`, `selected`, `information`, `subtle`, `subtlest`, `accent`, `day`, `night`.

## Pipeline Figma → React

Pipeline automatisé en 4 étapes :

1. **Sync** (`pnpm figma:sync`) — Export SVG depuis l'API Figma REST, incrémental via manifeste
2. **Optimize** (`pnpm optimize`) — SVGO remplace les couleurs hardcodées par `currentColor`
3. **Generate** (`pnpm generate`) — Génération des composants `.tsx`, types, CSS, barrel export
4. **Build** (`pnpm build`) — Bundle ESM via tsup, tree-shakeable

Raccourci : `pnpm pipeline` enchaîne les 4 étapes.

L'export est incrémental : seules les icônes modifiées/ajoutées dans Figma sont re-téléchargées. Utiliser `pnpm figma:sync -- --force` pour tout re-fetch.

## Ajout d'une icône

1. Ajouter l'icône dans la frame cible du fichier Figma (3 variants × 2 spacings)
2. Nommer la frame `Icon/{NomEnPascalCase}` avec les properties `variant` et `spacing`
3. `pnpm pipeline`
4. Commit + publish

## Stack

- React 18/19, TypeScript strict, ESM uniquement
- SVGO 3 pour l'optimisation SVG
- tsup pour le build
- Source Figma : fichier `3rYV3P1VzRh0q22HNhgCZv`, frame `1:965`

## Écosystème

Consommé par `@naxit/comete-design-system`. Les couleurs héritent de `@naxit/comete-design-tokens`.

## Licence

CC0-1.0
