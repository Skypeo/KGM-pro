# KGM Pro Decor — Site vitrine

Site vitrine premium pour **Gary Goder**, artisan peintre / plâtrier / décorateur basé en Lorraine (Nancy). Positionnement haut de gamme, savoir-faire rare (faux bois, faux marbre, faux ciel, feuille d'or, moulures décoratives).

## Stack

- **Astro 6.3** (template minimal, TypeScript strict)
- **Tailwind CSS 4.3** (via `@tailwindcss/vite`)
- **@astrojs/sitemap** pour sitemap.xml auto-généré
- Node 22+ requis

## Commandes

```bash
npm run dev       # dev server sur http://localhost:4321
npm run build     # build statique dans dist/
npm run preview   # preview du build
```

## Structure

```
src/
├── assets/              # logo, photos sources (optimisés par Astro)
├── components/          # composants .astro
├── layouts/             # BaseLayout.astro (header, footer, meta)
├── pages/
│   ├── index.astro      # home page
│   ├── services/        # pages services (SEO)
│   └── zones/           # pages localités (SEO local)
└── styles/
    └── global.css       # Tailwind import + tokens custom

public/                  # assets statiques (favicon, etc.)
_source-assets/          # archives originales fournies par le client
astro.config.mjs         # site URL + intégrations
```

## Métier — Gary Goder

- 20 ans d'expérience
- CAP Peintre poseur de sol + BP mention décorateur
- CAP Plâtrier Plaquiste Staffeur
- Intervenant au CFA de Pont-à-Mousson (transmission de savoir)
- **Spécialités rares** : faux bois, faux marbre, faux ciel, feuille d'or

## Services (10)

1. Peintre
2. Plaquiste
3. Plâtrier
4. Peinture intérieure
5. Peinture extérieure
6. Crépi
7. Façade / Ravalement de façade
8. Moulure
9. Béton ciré
10. Verrière

## Zones d'intervention (13 communes)

Nancy · Domartemont · Essey-lès-Nancy · Pont-à-Mousson · Frouard · Nomeny · Malzéville · Maxéville · Liverdun · Saint-Max · Pulnoy · Tomblaine · Velaine-en-Haye

## USPs

- **Devis gratuit, étudié à la main** — ⚠️ NE JAMAIS promettre de délai (pas de "sous 48h", "sous 72h", "rapide", "express"). Gary prend beaucoup de temps sur chaque devis pour qu'il soit réellement sur-mesure. Le temps passé est un argument de vente, pas un défaut.
- **Sur-mesure réel** : tarification et exécution sur-mesure (Gary prend beaucoup de temps sur chaque devis — argument à valoriser)
- **Artisan unique** : un seul interlocuteur, un seul standard de qualité
- 5/5 sur Google (avis à intégrer)

## Direction design

- **Palette** : mauve / violet doux + crème + texte profond
- **Typo** :
  - Display serif (Cormorant Garamond ou EB Garamond) pour les titres
  - Italique cursive (Italianno ou Petit Formal Script) pour les mots accentués ("moulure", "geste"…)
  - Sans-serif body (Inter ou Manrope)
- **Style** : éditorial, calme, photos en background avec overlay mauve, espacements généreux
- Réf maquette : `_source-assets/maquette-hero.png` (capture du boss)

## SEO

Stratégie SEO local fort :
- Page d'accueil optimisée sur "peintre Nancy" + métier global
- Une page par service (moulure, béton ciré, etc.) — capte les recherches métier
- Une page par commune (zones/[ville]) — capte le SEO local longue traîne
- JSON-LD `LocalBusiness` sur toutes les pages
- sitemap.xml auto-généré par `@astrojs/sitemap`

## Infos manquantes (à compléter)

- [ ] Téléphone exact (visible flou sur la maquette : ~"06 33 55 75 06" — à confirmer)
- [ ] Email
- [ ] Adresse / siège
- [ ] SIRET (pour mentions légales + JSON-LD)
- [ ] Photos des réalisations (le client doit les fournir)
- [ ] Domaine final (placeholder : `kgm-pro-decor.fr`)
- [ ] Lien Google My Business pour les avis

## Workflow

- Pas de push sur main direct, toujours via branche + PR (rappel CLAUDE.md global)
- Pas de commit sans demande explicite du user
- Mémoire projet à mettre à jour après chaque feature significative
