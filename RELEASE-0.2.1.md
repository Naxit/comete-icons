# @naxit/comete-icons v0.2.1 — Première release

La bibliothèque d'icônes de l'écosystème Comète : **380 icônes** exportées automatiquement depuis Figma, optimisées et distribuées sous forme de composants React typés.

## Contenu

### 380 composants React

Chaque icône est un composant autonome avec une API uniforme :

```tsx
import { Check, ChevronRight, Dashboard } from "@naxit/comete-icons";
import "@naxit/comete-icons/styles";

<Check variant="filled" color="success" size={24} />
<ChevronRight spacing="none" color="default" />
<Dashboard variant="duotone" size={32} />
```

### Props (IconProps)

| Prop | Type | Défaut | Description |
|---|---|---|---|
| `variant` | `"outlined" \| "filled" \| "duotone"` | `"outlined"` | Style visuel |
| `spacing` | `"default" \| "none"` | `"default"` | ViewBox 24×24 (avec padding) ou 16×16 (sans) |
| `color` | `IconColor` | `"default"` | Couleur sémantique liée aux design tokens |
| `size` | `number` | `24` | Taille en pixels (SVG, pas de pixelisation) |
| `className` | `string` | — | Classes CSS additionnelles |

### 15 couleurs sémantiques

`default`, `disabled`, `inverted`, `on-warning`, `warning`, `critical`, `success`, `brand`, `selected`, `information`, `subtle`, `subtlest`, `accent`, `day`, `night`

Chaque couleur est mappée vers une CSS custom property de `@naxit/comete-design-tokens` (ex: `.comete-icon--success` → `var(--icon-success)`).

### 2 281 SVG sources

3 variants × 2 spacings × ~380 icônes, organisés dans `svg/{outlined,filled,duotone}/`.

## Pipeline Figma → React

Pipeline automatisé en 4 étapes (`pnpm pipeline`) :

1. **Sync** — Export SVG depuis l'API Figma REST, incrémental via manifeste (seules les icônes modifiées/ajoutées sont re-téléchargées, `--force` pour tout re-fetch)
2. **Optimize** — SVGO remplace les couleurs hardcodées par `currentColor`, supprime les dimensions fixes
3. **Generate** — Génération des composants `.tsx`, types, CSS, barrel export
4. **Build** — Bundle ESM via tsup, tree-shakeable

## Stack technique

- React 18/19, TypeScript strict, ESM uniquement
- SVGO 3 pour l'optimisation SVG
- tsup pour le build
- Source Figma : fichier `3rYV3P1VzRh0q22HNhgCZv`, frame `1:965`

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

Consommé par `@naxit/comete-design-system` (icônes dans les boutons, résolution automatique de couleur). Les couleurs héritent de `@naxit/comete-design-tokens`.
