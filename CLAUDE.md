# CLAUDE.md

## Contexte

`@aexae/comete-icons` est la bibliothèque d'icônes React de l'écosystème Comète.
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
| `pnpm figma:sync` | Export incrémental des SVGs depuis Figma (ne re-télécharge que les changements) |
| `pnpm figma:sync -- --force` | Re-télécharge tous les SVGs (ignore le cache/manifeste) |
| `pnpm figma:sync -- --debug` | Mode debug : affiche l'arbre Figma pour diagnostic |
| `pnpm optimize` | Optimise les SVGs avec SVGO |
| `pnpm generate` | Génère les composants React depuis les SVGs |
| `pnpm pipeline` | fetch → optimize → generate (chaîne complète) |
| `pnpm build` | Build ESM avec tsup |

## Figma

- **Fichier** : `3rYV3P1VzRh0q22HNhgCZv` (Comète Icons Set)
- **Frame cible** : `1:965` — nommée **"DO NOT DELETE THIS FRAME (targeted by script)"**
- **Properties des composants** : `variant` (outlined/filled/duotone), `spacing` (default=24px avec padding, none=16px sans padding)

## Couleurs

**Règle absolue : ne jamais utiliser de couleur en dur (hex, rgb, etc.) dans les SVGs ou composants générés.** Toutes les couleurs doivent passer par des design tokens CSS (`var(--token)`). Si un token manque, demander à l'utilisateur avant de procéder.

- **Outlined / Filled** : tous les tracés utilisent `currentColor` (contrôlé par la prop `color` → classe CSS → token `--icon-*`)
- **Duotone** : deux couches de couleur :
  - Tracés **primaires** (couleur Figma `#455D84` = `--icon-default`) → `currentColor`
  - Tracés **secondaires** : couleur d'accent mappée vers un token CSS. Mapping actuel :
    - `#007ADA` → `var(--icon-information)`
    - `#856D0E` → `var(--icon-warning)`
    - `#E12121` → `var(--icon-critical)`
- La prop `color` mappe vers les CSS custom properties de `@aexae/comete-design-tokens` : `--icon-default`, `--icon-success`, etc.

### ⚠️ `src/styles/icons.css` appartient à `sync-icon-colors.ts`, PAS à `generate`

Le fichier `src/styles/icons.css` (mapping `color` → token, ex. `.comete-icon--accentBlueGrey`) est la sortie de **`pnpm sync-colors`** (`sync-icon-colors.ts`), qui couvre le jeu de couleurs **complet** (`accentBlueGrey/Magenta/Purple/Teal/Turquoise`, `bold`, `comete`, …).

`pnpm generate` régénère aussi un `icons.css`, mais **appauvri** (jeu de couleurs réduit) → le commiter **régresse les couleurs**. Règles :

- `pnpm sync-colors` **n'est pas** dans `pnpm pipeline` : après un `generate`/`pipeline`, **ne pas committer le `icons.css` produit par generate**. Soit relancer `pnpm sync-colors`, soit restaurer `git checkout -- src/styles/icons.css`.
- Ajouter/retirer une icône **ne change pas** `icons.css` (il est par couleur, pas par icône) → il doit rester **inchangé** dans un diff d'ajout d'icône.

## Export incrémental

Le script `fetch-icons.ts` utilise un manifeste (`svg/.manifest.json`) pour tracker l'état des icônes :

- **Première exécution** : téléchargement complet, création du manifeste
- **Exécutions suivantes** : compare le `lastModified` du fichier Figma avec le manifeste
  - Si identique → skip complet (aucun appel API supplémentaire)
  - Si différent → récupère l'arbre, compare les nodeIds pour détecter ajouts/suppressions/modifications
- **`--force`** : ignore le manifeste et re-télécharge tout

### ⚠️ Pipeline ADDITIF (règle absolue)

Le pipeline **ajoute** les icônes présentes dans Figma et absentes du repo, mais **ne supprime JAMAIS** une icône présente dans le repo et absente de Figma :

- `fetch-icons.ts` ne supprime plus les SVG « obsolètes » : il les **conserve** et les rapporte seulement (`… absentes de Figma (conservées)`).
- `generate-components.ts` **unionne** les icônes de `svg/` (Figma) avec les composants déjà présents dans `src/icons/*.tsx` → le jeu d'icônes du paquet ne rétrécit jamais (robuste même en `--force`/fresh clone).
- Retirer une icône est donc une opération **manuelle et explicite** (supprimer son `.tsx` + les entrées `index.ts`/`types.ts`/`registry.ts`), jamais un effet de bord du sync — et c'est un changement **cassant**.

## Convention de nommage

Les noms d'icônes sont en PascalCase, identiques aux noms dans Figma (ex: `ConfirmationNumber`, `ChevronLeft`).
Fichiers SVG : `{IconName}-{16|24}.svg`

## Ajout d'une nouvelle icône depuis Figma

1. Ajouter l'icône dans la frame **"DO NOT DELETE THIS FRAME (targeted by script)"** du fichier Figma (3 variants × 2 spacings)
2. Nommer la frame de l'icône `Icon/{NomEnPascalCase}` avec des instances portant les properties `variant` et `spacing`
3. `FIGMA_TOKEN=xxx pnpm figma:sync && pnpm optimize && pnpm generate` (ou `pnpm pipeline`). ⚠️ ne pas utiliser `pnpm fetch` (commande built-in de pnpm). Le token est lu depuis la variable **`FIGMA_TOKEN`** (le `.env` peut la définir).
4. **Revoir le diff.** Le pipeline est additif (il n'enlève rien) mais peut ajouter d'**autres** icônes présentes dans Figma. Pour n'ajouter QUE des icônes précises : restaurer le reste à HEAD (`git checkout -- src/icons src/index.ts src/types.ts src/registry.ts src/styles/icons.css`), garder seulement les `.tsx` voulus, puis insérer leurs entrées dans `index.ts`, `types.ts` (union **`IconName`** — pas `IconColor` !) et `registry.ts` (import + map). Vérifier que `src/styles/icons.css` reste **inchangé** (cf. section Couleurs).
5. `pnpm typecheck && pnpm lint && pnpm test && pnpm build`
6. Commit + publish (bump de version)

## Ajout d'une icône Material Symbols (hors Figma)

Quand une icône provient de Material Symbols et n'est pas dans le fichier Figma :

### Source des SVGs

- **Repo GitHub** (source de vérité, SVGs à jour) :
  - Outlined : `https://raw.githubusercontent.com/google/material-design-icons/master/symbols/web/{nom_underscore}/materialsymbolsoutlined/{nom_underscore}_24px.svg`
  - Filled (FILL=1) : `https://raw.githubusercontent.com/google/material-design-icons/master/symbols/web/{nom_underscore}/materialsymbolsoutlined/{nom_underscore}_fill1_24px.svg`
- **API Google Fonts** (fallback, ⚠️ certains SVGs sont obsolètes — ex: `task_alt` retournait une pilule au lieu d'un cercle) :
  - Outlined : `https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/{nom_underscore}/default/24px.svg`
  - Filled (FILL=1) : `https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/{nom_underscore}/fill1/24px.svg`
- **Noms** : Google utilise des underscores (`wifi_off`), le DS utilise PascalCase (`WifiOff`)
- **Ne PAS utiliser les variantes `-rounded` d'Iconify comme filled** — ce sont des variantes de forme, pas de remplissage
- **Toujours vérifier visuellement** que le SVG téléchargé correspond à ce qu'on voit sur https://fonts.google.com/icons

### Variantes outlined vs filled

Material Symbols a un paramètre `FILL` (0 = outlined, 1 = filled). Certaines icônes n'ont pas de différence visuelle entre les deux (ex: `tune`, `wifi`, `collapse_all`, `unfold_less`). Dans ce cas, utiliser les mêmes paths pour outlined et filled (c'est le comportement normal).

Pour les icônes ayant un vrai filled (ex: `description`, `label`, `event`, `inbox`, `rocket_launch`), le filled a des formes pleines/solides au lieu de simples contours.

### Normalisation du viewBox

Les SVGs Google Fonts utilisent `viewBox="0 -960 960 960"`. Pour les normaliser en `0 0 24 24` (ou `0 0 16 16`), encapsuler les paths dans un `<g>` avec transform :

```xml
<!-- 24px -->
<svg viewBox="0 0 24 24">
  <g transform="scale(0.025) translate(0,960)">
    <path fill="currentColor" d="...paths Google Fonts..."/>
  </g>
</svg>

<!-- 16px -->
<svg viewBox="0 0 16 16">
  <g transform="scale(0.016667) translate(0,960)">
    <path fill="currentColor" d="...paths Google Fonts..."/>
  </g>
</svg>
```

SVGO aplati automatiquement les transforms lors de l'optimisation.

**Important** : toujours ajouter `fill="currentColor"` aux paths avant l'optimisation (les SVGs Google Fonts n'en ont pas par défaut).

### Variante duotone

Pour les icônes Material Symbols ajoutées manuellement, utiliser les paths outlined avec `fill="#455D84"` (couleur primaire duotone). Si l'icône a des éléments secondaires qui méritent une couleur d'accent, les marquer avec la couleur hex correspondante au token souhaité (ex: `#007ADA` → `var(--icon-information)`, `#856D0E` → `var(--icon-warning)`).

Le mapping hex → token est dans `scripts/optimize-svg.ts` (`DUOTONE_COLOR_TO_TOKEN`).

### Pipeline

1. Placer les 6 SVGs dans `svg/{outlined,filled,duotone}/{PascalName}-{24,16}.svg`
2. `pnpm optimize` → `pnpm generate` → `pnpm build`
3. `npx biome check --write .` (les fichiers auto-générés nécessitent un fix d'imports)
4. `pnpm lint && pnpm test`
5. Bump version, commit, publish
