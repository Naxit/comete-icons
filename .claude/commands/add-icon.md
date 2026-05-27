---
description: "Ajouter une ou plusieurs icones au set Comete Icons depuis Figma ou Material Symbols"
allowed-tools: Bash, Read, Write, Edit, Glob, Grep, WebFetch, WebSearch, Agent
---

# Skill : Ajout d'icones dans comete-icons

Tu travailles dans le depot `comete-icons` situe a `/Users/nax/GitHub/comete-icons/`.

## Argument attendu

L'utilisateur fournit `$ARGUMENTS` qui peut etre :
- Un **nom d'icone Material Symbols** (ex: `add-icon "Rocket"`, `add-icon "Schedule, Visibility"`)
- Un **lien Figma** vers un noeud du fichier Comete Icons Set
- La mention **"depuis Figma"** ou **"from Figma"** (= lancer le pipeline Figma complet)

---

## Source 1 : Depuis Material Symbols

Quand l'utilisateur donne un ou plusieurs noms d'icones Material Symbols (pas un lien Figma) :

### Etape 1 — Telecharger les SVGs

Pour chaque icone demandee, telecharger les SVGs depuis le **repo GitHub** (source de verite, SVGs a jour).

**Source principale — Repo GitHub** (viewBox `0 -960 960 960`, a normaliser) :
```
Outlined : https://raw.githubusercontent.com/google/material-design-icons/master/symbols/web/{snake_case}/materialsymbolsoutlined/{snake_case}_24px.svg
Filled   : https://raw.githubusercontent.com/google/material-design-icons/master/symbols/web/{snake_case}/materialsymbolsoutlined/{snake_case}_fill1_24px.svg
```

**Fallback — API Google Fonts** (si le repo GitHub ne contient pas l'icone) :
```
Outlined : https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/{snake_case}/default/24px.svg
Filled   : https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/{snake_case}/fill1/24px.svg
```

> **ATTENTION** : L'API Google Fonts peut retourner des SVGs obsoletes (ex: `task_alt` retournait une pilule au lieu d'un cercle). Toujours verifier visuellement que le SVG correspond a ce qu'on voit sur https://fonts.google.com/icons.

> **Ne PAS utiliser les variantes `-rounded` d'Iconify comme filled** — ce sont des variantes de forme (coins arrondis), pas de remplissage.

**Conventions de conversion** :
- Nom Material Symbols → `snake_case` pour l'URL (ex: `ChevronLeft` → `chevron_left`)
- Nom du composant React → **PascalCase** (ex: `chevron_left` → `ChevronLeft`)

### Etape 2 — Normaliser le viewBox et creer les 6 fichiers SVG

Les SVGs Material Symbols utilisent `viewBox="0 -960 960 960"`. Il faut normaliser vers `0 0 24 24` (et `0 0 16 16`) en encapsulant les paths dans un `<g>` avec transform.

**Important** : ajouter `fill="currentColor"` aux paths (les SVGs Google n'en ont pas par defaut).

```bash
# Outlined 24px
echo '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="scale(0.025) translate(0,960)"><path fill="currentColor" d="...PATHS..."/></g></svg>' > svg/outlined/{Name}-24.svg

# Outlined 16px
echo '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g transform="scale(0.016667) translate(0,960)"><path fill="currentColor" d="...PATHS..."/></g></svg>' > svg/outlined/{Name}-16.svg

# Filled 24px et 16px — meme principe avec les paths filled (FILL=1)
# Si le filled est identique a l'outlined (ex: tune, wifi), utiliser les memes paths

# Duotone 24px et 16px — utiliser les paths outlined avec fill="#455D84" (couleur primaire duotone)
```

**Ecriture des 6 fichiers SVG** :
```
svg/outlined/{PascalCaseName}-24.svg
svg/outlined/{PascalCaseName}-16.svg
svg/filled/{PascalCaseName}-24.svg
svg/filled/{PascalCaseName}-16.svg
svg/duotone/{PascalCaseName}-24.svg
svg/duotone/{PascalCaseName}-16.svg
```

SVGO aplatira automatiquement les transforms lors de l'optimisation.

### Etape 3 — Pipeline optimize → generate → build

```bash
cd /Users/nax/GitHub/comete-icons
pnpm optimize          # SVGO : normalise les paths, applique currentColor
pnpm generate          # Genere composants React + types + registry + index
npx biome check --write .  # Fix imports auto-generes (tri Biome)
pnpm build             # Build ESM avec tsup
```

### Etape 4 — Verification

```bash
pnpm lint              # Zero erreur
pnpm test              # Tests OK
```

Verifier aussi :
1. Lire le fichier `src/icons/{PascalCaseName}.tsx` genere
2. Verifier que les variantes `outlined`, `filled`, `duotone` sont presentes avec spacings `default` et `none`
3. Verifier que les paths utilisent `fill="currentColor"` (outlined/filled) ou `fill="#455D84"` / `var(--icon-*)` (duotone)
4. Verifier que outlined et filled ont des paths **differents** quand applicable

### Etape 5 — Resume

Afficher un resume :
```
Icone(s) ajoutee(s) :
- {PascalCaseName} (outlined + filled + duotone, 24px + 16px)
  Source : Material Symbols ({snake_case_name})
  Filled distinct : oui/non

Prochaines etapes :
- Commit + publish quand pret
```

---

## Source 2 : Depuis Figma

### Via lien Figma direct

Quand l'utilisateur fournit un lien Figma vers un noeud specifique :

1. Utiliser l'API Figma pour exporter les SVGs des 6 variantes (3 variants × 2 spacings)
2. Identifier les node IDs pour chaque variante via `get_design_context` ou l'API REST
3. Exporter via `https://api.figma.com/v1/images/{fileKey}?ids={nodeIds}&format=svg`
4. Telecharger chaque SVG et le placer dans le bon dossier
5. Si le SVG duotone contient des couleurs secondaires, verifier le mapping dans `scripts/optimize-svg.ts` (`DUOTONE_COLOR_TO_TOKEN`)
6. Si une nouvelle couleur secondaire est trouvee, l'ajouter au mapping
7. Lancer le pipeline : `pnpm optimize && pnpm generate && npx biome check --write . && pnpm build`

### Via pipeline Figma complet

Quand l'utilisateur mentionne "depuis Figma" sans lien specifique :

```bash
cd /Users/nax/GitHub/comete-icons && pnpm pipeline
```

Ce pipeline :
1. `figma:sync` — Fetch incremental des SVGs depuis le fichier Figma `3rYV3P1VzRh0q22HNhgCZv`, frame `1:965`
2. `optimize` — SVGO avec gestion duotone (primaire → currentColor, secondaire → tokens CSS)
3. `generate` — Genere tous les composants React
4. `build` — Build ESM avec tsup

Verification post-pipeline :
```bash
npx biome check --write .
pnpm lint && pnpm test
```

---

## Couleurs duotone

Le mapping des couleurs secondaires duotone est dans `scripts/optimize-svg.ts` (`DUOTONE_COLOR_TO_TOKEN`) :

| Couleur Figma | Token CSS |
|---|---|
| `#455D84` (primaire) | → `currentColor` |
| `#007ADA` | → `var(--icon-information)` |
| `#856D0E` | → `var(--icon-warning)` |

Si une nouvelle couleur secondaire est rencontree, l'ajouter au mapping avant d'optimiser.

---

## Regles critiques

1. **JAMAIS de couleur hardcodee** dans les SVGs ou composants. Tout passe par `currentColor` ou `var(--icon-*)`.
2. **JAMAIS committer/push/publish sans instruction explicite** de l'utilisateur.
3. **JAMAIS creer de token** dans comete-design-tokens sans approbation.
4. Les noms d'icones sont toujours en **PascalCase** dans le code, en **snake_case** dans les URLs Material Symbols.
5. Le repertoire de travail est `/Users/nax/GitHub/comete-icons/`.
6. Si une icone existe deja (fichier SVG present), **demander confirmation avant d'ecraser**.
7. **Toujours generer les 3 variantes** (outlined, filled, duotone) et les 2 spacings (24px, 16px) = 6 fichiers SVG.
8. **Toujours verifier visuellement** que le SVG telecharge correspond au rendu attendu sur fonts.google.com/icons.
9. Preferer le **repo GitHub** `google/material-design-icons` a l'API Google Fonts pour les SVGs (plus a jour).

## Structure du composant genere (reference)

Chaque icone suit exactement ce template (genere par `generate-components.ts`) :

```tsx
import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="..."/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="..."/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="..."/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="..."/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="..."/><path fill="var(--icon-information)" d="..."/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="..."/><path fill="var(--icon-information)" d="..."/></> }
    }
};

export function IconName({
  size = 24,
  spacing = "default",
  variant = "outlined",
  color = "default",
  className,
  ...props
}: IconProps) {
  const data = svgData[variant]?.[spacing] ?? svgData.outlined?.["default"];
  if (!data) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={data.viewBox}
      fill="none"
      className={`${getIconClass(color)}${className ? ` ${className}` : ""}`}
      aria-hidden="true"
      {...props}
    >
      {data.paths}
    </svg>
  );
}

IconName.displayName = "IconName";
```
