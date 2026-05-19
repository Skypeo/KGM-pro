// Mapping slug → image hero pour les pages services individuelles.
// Images téléchargées depuis Unsplash (libres de droit) le 2026-05-19, stockées localement
// pour éviter toute dépendance réseau côté visiteur + bénéficier de l'optimisation Astro
// (WebP responsive auto-généré).
//
// TODO Gary : remplacer par les vraies photos de chantiers de Gary quand disponibles.
// Garder le même format de mapping ici, l'import statique fait le reste.

import type { ImageMetadata } from "astro";

import moulurePlatre from "../assets/services/moulure-platre.jpg";
import peintureInterieure from "../assets/services/peinture-interieure.jpg";
import peintureExterieure from "../assets/services/peinture-exterieure.jpg";
import crepiFacade from "../assets/services/crepi-facade.jpg";
import ravalementFacade from "../assets/services/ravalement-facade.jpg";
import betonCire from "../assets/services/beton-cire.jpg";
import verriere from "../assets/services/verriere.jpg";
import platrierPlaquiste from "../assets/services/platrier-plaquiste.jpg";

export const SERVICE_IMAGES: Record<string, ImageMetadata> = {
  "moulure-platre": moulurePlatre,
  "peinture-interieure": peintureInterieure,
  "peinture-exterieure": peintureExterieure,
  "crepi-facade": crepiFacade,
  "ravalement-facade": ravalementFacade,
  "beton-cire": betonCire,
  "verriere": verriere,
  "platrier-plaquiste": platrierPlaquiste,
};
