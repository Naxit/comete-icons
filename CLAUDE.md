# CLAUDE.md

## Contexte

`@naxit/comete-icons` est la bibliothèque d'icônes React de l'écosystème Comète.
Les icônes proviennent du fichier Figma `Comète Icons Set` et sont exportées en SVG optimisé
puis transformées en composants React typés avec support des design tokens de couleur.

## Architecture

```
comete-icons/
├── scripts/
│   ├── fetch-icons.ts          # API Figma → SVG bruts dans svg/
│   ├── optimize-svg.ts         # SVGO : nettoyage + currentColor
│   └── generate-components.ts  # SVG → composants React + CSS + types
├── svg/{outlined,filled,duotone}/  # SVGs (gitignored, générés par fetch)
├── src/
│   ├── icons/*.tsx             # Composants générés (1 par icône)
│   ├── styles/icons.css        # Classes CSS → design tokens
│   ├── types.ts                # IconProps, IconColor, IconSpacing, IconVariant
│   ├── utils.ts                # getIconClass()
│   └── index.ts                # Barrel export
└── dist/                       # Build ESM (tsup)
```

## Commandes

| Commande | Description |
|---|---|
| `FIGMA_TOKEN=xxx pnpm figma:sync` | Exporte les SVGs depuis Figma |
| `pnpm optimize` | Optimise les SVGs avec SVGO |
| `pnpm generate` | Génère les composants React depuis les SVGs |
| `pnpm pipeline` | fetch → optimize → generate (chaîne complète) |
| `pnpm build` | Build ESM avec tsup |

## Figma

- **Fichier** : `3rYV3P1VzRh0q22HNhgCZv` (Comète Icons Set)
- **Frame cible** : `1:965` — nommée **"DO NOT DELETE THIS FRAME (targeted by script)"**
- **Properties des composants** : `variant` (outlined/filled/duotone), `spacing` (default=24px avec padding, none=16px sans padding)

## Couleurs

Les icônes utilisent `currentColor`. La prop `color` mappe vers les CSS custom properties
de `@naxit/comete-design-tokens` : `--icon-default`, `--icon-success`, etc.

## Convention de nommage

Les noms d'icônes sont en PascalCase, identiques aux noms dans Figma (ex: `ConfirmationNumber`, `ChevronLeft`).
Fichiers SVG : `{IconName}-{16|24}.svg`

## Ajout d'une nouvelle icône

1. Ajouter l'icône dans la frame **"DO NOT DELETE THIS FRAME (targeted by script)"** du fichier Figma (3 variants × 2 spacings)
2. Nommer la frame de l'icône `Icon/{NomEnPascalCase}` avec des instances portant les properties `variant` et `spacing`
3. `FIGMA_TOKEN=xxx pnpm pipeline` pour tout regénérer (⚠️ ne pas utiliser `pnpm fetch` qui est une commande built-in de pnpm)
4. `pnpm build`
5. Commit + publish
