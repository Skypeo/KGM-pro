import type { ImageMetadata } from "astro";

import moulurePlatre from "../assets/realisations/moulure/moulure-09.webp";
import peintureInterieure from "../assets/realisations/peinture-interieure/peinture-interieure-09.webp";
import peintureExterieure from "../assets/realisations/peinture-exterieure/peinture-exterieure-21.webp";
import crepiFacade from "../assets/realisations/peinture-exterieure/peinture-exterieure-22.webp";
import ravalementFacade from "../assets/realisations/peinture-exterieure/peinture-exterieure-19.webp";
import betonCire from "../assets/realisations/beton-cire/beton-cire-01.webp";
import verriere from "../assets/services/verriere.jpg";
import platrierPlaquiste from "../assets/realisations/plaquiste/plaquiste-02.webp";
import fauxCiel from "../assets/realisations/faux-ciel/faux-ciel-01.webp";
import peintureDecorative from "../assets/realisations/peinture-decorative/peinture-decorative-02.webp";

export const SERVICE_IMAGES: Record<string, ImageMetadata> = {
  "moulure-platre": moulurePlatre,
  "peinture-interieure": peintureInterieure,
  "peinture-exterieure": peintureExterieure,
  "crepi-facade": crepiFacade,
  "ravalement-facade": ravalementFacade,
  "beton-cire": betonCire,
  "verriere": verriere,
  "platrier-plaquiste": platrierPlaquiste,
  "faux-ciel": fauxCiel,
  "faux-bois": peintureDecorative,
  "faux-marbre": peintureDecorative,
  "feuille-d-or": moulurePlatre,
};
