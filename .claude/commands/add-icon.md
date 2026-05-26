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

Pour chaque icone demandee, telecharger les 6 fichiers SVG necessaires depuis l'API Google Fonts.

**URL pattern** :
```
https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/{snake_case_name}/default/24px.svg
https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/{snake_case_name}/default/16px.svg
https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsrounded/{snake_case_name}/fill1/24px.svg
https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsrounded/{snake_case_name}/fill1/16px.svg
```

**Conventions de conversion** :
- Nom Material Symbols → `snake_case` pour l'URL (ex: `ChevronLeft` → `chevron_left`, `Add` → `add`)
- Nom du composant React → **PascalCase** (ex: `chevron_left` → `ChevronLeft`)

**Mapping variant Google → variant Comete** :
| Comete variant | Google variant | Google fill param |
|---|---|---|
| `outlined` | `materialsymbolsoutlined` | `default` (= pas de fill) |
| `filled` | `materialsymbolsrounded` | `fill1` |

> **Note** : La variante `duotone` n'existe pas dans Material Symbols. Elle sera generee manuellement plus tard si necessaire. Pour l'instant, creer les SVGs outlined et filled uniquement.

**Ecriture des fichiers SVG** :
```
svg/outlined/{PascalCaseName}-24.svg   ← outlined/default/24px
svg/outlined/{PascalCaseName}-16.svg   ← outlined/default/16px
svg/filled/{PascalCaseName}-24.svg     ← filled/fill1/24px
svg/filled/{PascalCaseName}-16.svg     ← filled/fill1/16px
```

Si le dossier `svg/duotone/` contient deja des SVGs pour d'autres icones, NE PAS creer de fichiers duotone pour les nouvelles icones Material Symbols — le generateur gere l'absence gracieusement.

### Etape 2 — Optimiser les SVGs

Executer le script d'optimisation SVGO :
```bash
cd /Users/nax/GitHub/comete-icons && pnpm optimize
```

Cela va :
- Remplacer les couleurs hardcodees par `currentColor`
- Supprimer les dimensions fixes
- Nettoyer les metadonnees

### Etape 3 — Generer les composants React

```bash
cd /Users/nax/GitHub/comete-icons && pnpm generate
```

Cela regenere :
- `src/icons/{PascalCaseName}.tsx` — composant React avec toutes les variantes inline
- `src/types.ts` — union `IconName` mise a jour
- `src/registry.ts` — registry mis a jour
- `src/index.ts` — barrel export mis a jour
- `src/styles/icons.css` — classes CSS (inchange sauf nouveaux tokens)

### Etape 4 — Build

```bash
cd /Users/nax/GitHub/comete-icons && pnpm build
```

### Etape 5 — Verification

Verifier que le composant genere est correct :
1. Lire le fichier `src/icons/{PascalCaseName}.tsx` genere
2. Verifier que :
   - Les variantes `outlined` et `filled` sont presentes avec les spacings `default` (24) et `none` (16)
   - Les paths SVG utilisent `fill="currentColor"` (pas de couleurs hardcodees)
   - La structure suit le pattern standard (svgData → function → displayName)
3. Lancer `pnpm typecheck` pour verifier le typage
4. Lancer `pnpm lint` pour verifier le linting

### Etape 6 — Resume

Afficher un resume :
```
Icone(s) ajoutee(s) :
- {PascalCaseName} (outlined + filled, 24px + 16px)
  Source : Material Symbols ({snake_case_name})

Variante duotone : non disponible (Material Symbols ne fournit pas de duotone)

Prochaines etapes :
- Ajouter la variante duotone manuellement dans Figma si necessaire
- Mettre a jour la story Explorer dans le Storybook du DS
- Commit + publish quand pret
```

---

## Source 2 : Depuis Figma (pipeline complet)

Quand l'utilisateur mentionne Figma ou fournit un lien Figma :

### Pre-requis

Verifier que le token Figma est disponible :
```bash
cd /Users/nax/GitHub/comete-icons && grep -q FIGMA_TOKEN .env && echo "OK" || echo "MISSING"
```

Si manquant, demander a l'utilisateur de le fournir.

### Pipeline

Executer le pipeline complet qui fetch depuis Figma, optimise et genere :
```bash
cd /Users/nax/GitHub/comete-icons && pnpm pipeline
```

Ce pipeline :
1. `figma:sync` — Fetch incremental des SVGs depuis le fichier Figma `3rYV3P1VzRh0q22HNhgCZv`, frame `1:965`
2. `optimize` — SVGO avec gestion duotone (primaire → currentColor, secondaire → var(--icon-information))
3. `generate` — Genere tous les composants React
4. `build` — Build ESM avec tsup

### Verification post-pipeline

```bash
cd /Users/nax/GitHub/comete-icons && pnpm typecheck && pnpm lint
```

### Resume

Afficher les icones nouvelles/modifiees/supprimees en comparant le manifeste avant/apres :
```bash
cd /Users/nax/GitHub/comete-icons && cat svg/.manifest.json | python3 -c "
import json, sys
m = json.load(sys.stdin)
print(f'Total: {len(m[\"icons\"])} variantes')
print(f'Derniere modif Figma: {m[\"lastModified\"]}')
print(f'Genere le: {m[\"generatedAt\"]}')
"
```

---

## Regles critiques

1. **JAMAIS de couleur hardcodee** dans les SVGs ou composants. Tout passe par `currentColor` ou `var(--icon-*)`.
2. **JAMAIS committer/push/publish sans instruction explicite** de l'utilisateur.
3. **JAMAIS creer de token** dans comete-design-tokens sans approbation.
4. Les noms d'icones sont toujours en **PascalCase** dans le code, en **snake_case** dans les URLs Material Symbols.
5. Le repertoire de travail est `/Users/nax/GitHub/comete-icons/`.
6. Si une icone existe deja (fichier SVG present), **demander confirmation avant d'ecraser**.
7. Apres ajout, toujours rappeler de **mettre a jour la story Explorer** dans le Storybook du DS.

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
