import type { ImageMetadata } from "astro";

import moulurePlatre from "../assets/realisations/moulure/moulure-09.webp";
import peintureInterieure from "../assets/realisations/peinture-interieure/peinture-interieure-09.webp";
import peintureExterieure from "../assets/realisations/peinture-exterieure/peinture-exterieure-21.webp";
import crepiFacade from "../assets/realisations/peinture-exterieure/peinture-exterieure-22.webp";
import ravalementFacade from "../assets/realisations/peinture-exterieure/peinture-exterieure-19.webp";
import betonCire from "../assets/realisations/beton-cire/beton-cire-01.webp";
import verriere from "../assets/realisations/renovation/renovation-05.webp";
import platrierPlaquiste from "../assets/realisations/plaquiste/plaquiste-02.webp";
import fauxCiel from "../assets/realisations/faux-ciel/faux-ciel-01.webp";
import fauxBois from "../assets/realisations/peinture-decorative/peinture-decorative-01.webp";
import fauxMarbre from "../assets/realisations/peinture-decorative/peinture-decorative-06.webp";
import feuilleOr from "../assets/realisations/moulure/moulure-16.webp";

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
  "faux-bois": fauxBois,
  "faux-marbre": fauxMarbre,
  "feuille-d-or": feuilleOr,
};
