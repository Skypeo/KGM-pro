import type { ImageMetadata } from "astro";

export interface GalleryItem {
  file: string;
  alt: string;
}

const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/realisations/**/*.webp",
  { eager: true },
);

export const SERVICE_GALLERY: Record<string, GalleryItem[]> = {
  "moulure-platre": [
    { file: "moulure/moulure-16.webp", alt: "Corniche ornementale avec motifs floraux sculptés" },
    { file: "moulure/moulure-05.webp", alt: "Faux-plafond moulé avec éclairage LED intégré" },
    { file: "moulure/moulure-14.webp", alt: "Corniche classique posée au plafond" },
    { file: "moulure/moulure-01.webp", alt: "Corniche en plâtre ornée sur plan de travail" },
  ],
  "peinture-interieure": [
    { file: "peinture-interieure/peinture-interieure-10.webp", alt: "Peinture intérieure et papier peint dans pièce rénovée" },
    { file: "peinture-interieure/peinture-interieure-01.webp", alt: "Peinture intérieure — pièce rénovée" },
    { file: "peinture-interieure/peinture-interieure-05.webp", alt: "Peinture intérieure — finition soignée" },
    { file: "peinture-interieure/peinture-interieure-08.webp", alt: "Peinture intérieure — chambre rénovée" },
  ],
  "peinture-exterieure": [
    { file: "peinture-exterieure/peinture-exterieure-19.webp", alt: "Ravalement de façade — peinture bi-ton" },
    { file: "peinture-exterieure/peinture-exterieure-01.webp", alt: "Peinture extérieure — façade rénovée" },
    { file: "peinture-exterieure/peinture-exterieure-05.webp", alt: "Peinture extérieure — résultat final" },
    { file: "peinture-exterieure/peinture-exterieure-10.webp", alt: "Peinture extérieure — façade en cours" },
  ],
  "crepi-facade": [
    { file: "peinture-exterieure/peinture-exterieure-21.webp", alt: "Façade enduite et peinte — résultat final" },
    { file: "peinture-exterieure/peinture-exterieure-10.webp", alt: "Enduit de façade en cours d'application" },
    { file: "peinture-exterieure/peinture-exterieure-15.webp", alt: "Crépi de façade — finition" },
  ],
  "ravalement-facade": [
    { file: "peinture-exterieure/peinture-exterieure-21.webp", alt: "Façade après ravalement complet" },
    { file: "peinture-exterieure/peinture-exterieure-05.webp", alt: "Ravalement de façade — travaux en cours" },
    { file: "peinture-exterieure/peinture-exterieure-01.webp", alt: "Ravalement de façade — résultat" },
  ],
  "beton-cire": [
    { file: "renovation/renovation-17.webp", alt: "Douche béton ciré aux murs avec colonne noire" },
    { file: "renovation/renovation-14.webp", alt: "Mur béton ciré — texture minérale lisse" },
    { file: "renovation/renovation-12.webp", alt: "Sol béton ciré dans une cuisine" },
  ],
  "verriere": [
    { file: "renovation/renovation-06.webp", alt: "Verrière noire horizontale — gros plan traverses" },
  ],
  "platrier-plaquiste": [
    { file: "plaquiste/plaquiste-01.webp", alt: "Pose de cloisons en plaques de plâtre" },
    { file: "plaquiste/plaquiste-03.webp", alt: "Finitions plaquiste — enduit et bandes" },
  ],
  "faux-bois": [
    { file: "peinture-decorative/peinture-decorative-02.webp", alt: "Enduit décoratif texturé argenté" },
    { file: "peinture-decorative/peinture-decorative-06.webp", alt: "Panneau mural décoratif gris" },
  ],
  "faux-marbre": [
    { file: "peinture-decorative/peinture-decorative-02.webp", alt: "Enduit décoratif texturé" },
    { file: "peinture-decorative/peinture-decorative-01.webp", alt: "Peinture décorative murale" },
  ],
  "feuille-d-or": [
    { file: "moulure/moulure-09.webp", alt: "Chérubin en plâtre et corniche ornée" },
    { file: "moulure/moulure-14.webp", alt: "Corniche classique posée au plafond" },
  ],
};

export function getServiceGallery(slug: string) {
  const items = SERVICE_GALLERY[slug] ?? [];
  return items
    .map((item) => {
      const key = `/src/assets/realisations/${item.file}`;
      const mod = images[key];
      if (!mod) return null;
      return { image: mod.default, alt: item.alt };
    })
    .filter((g): g is { image: ImageMetadata; alt: string } => g !== null);
}
