# @naxit/comete-icons v0.2.1 — Première release

La bibliothèque d'icônes de l'écosystème Comète : **380 icônes** exportées depuis Figma, optimisées en SVG et distribuées sous forme de composants React typés.

## Ce que contient cette release

### 380 composants React

Chaque icône est un composant autonome avec un API uniforme :

```tsx
import { Check, ChevronRight, Dashboard } from "@naxit/comete-icons";

<Check variant="filled" color="success" size={24} />
<ChevronRight spacing="none" color="default" />
<Dashboard variant="duotone" size={32} />
```

### Props

| Prop | Type | Défaut | Description |
|---|---|---|---|
| `variant` | `"outlined" \| "filled" \| "duotone"` | `"outlined"` | Style visuel |
| `spacing` | `"default" \| "none"` | `"default"` | Padding interne (24×24 vs 16×16 viewBox) |
| `color` | `IconColor` | `"default"` | Couleur sémantique liée aux design tokens |
| `size` | `number` | — | Taille en pixels (SVG, pas de pixelisation) |
| `className` | `string` | — | Classes CSS additionnelles |

Les 14 couleurs sémantiques (`default`, `disabled`, `inverted`, `warning`, `critical`, `success`, `brand`, `selected`, `information`, `subtle`, `subtlest`, `accent`, `day`, `night`) sont mappées vers les CSS custom properties `--icon-*` de `@naxit/comete-design-tokens`.

### Pipeline Figma → React

Un pipeline automatisé et incrémental :

1. **Sync** — Export des SVG depuis l'API Figma REST avec cache par manifeste (seules les icônes modifiées sont re-téléchargées)
2. **Optimize** — SVGO remplace les couleurs hardcodées par `currentColor`
3. **Generate** — Génération des composants React + types TypeScript + CSS
4. **Build** — Bundle ESM via tsup, tree-shakeable

## Stack technique

- React 18/19, TypeScript strict, ESM uniquement
- SVGO pour l'optimisation SVG
- tsup pour le build (tree-shaking, code splitting)
- Export incrémental via manifeste (`--force` pour bypass)

## Utilisation

```bash
pnpm add @naxit/comete-icons
```

```tsx
import { Lock } from "@naxit/comete-icons";
import "@naxit/comete-icons/styles";

<Lock variant="outlined" color="critical" size={20} />
```

## Écosystème

Les icônes sont consommées par `@naxit/comete-design-system` (ex: icônes dans les boutons) et héritent leurs couleurs de `@naxit/comete-design-tokens`.
