// Données métier centralisées — KGM Pro Decor
// Édite ici les coordonnées, services, zones. Tout le site lit depuis ce fichier.

export const SITE = {
  name: "KGM Pro Decor",
  artisan: "Gary Goder",
  tagline: "L'art de la moulure. La précision du geste.",
  description:
    "Peintre, plâtrier et décorateur à Nancy. 20 ans de métier, double CAP + BP décorateur. Spécialités décoratives rares : faux bois, faux marbre, faux ciel, feuille d'or.",
  // TODO confirmer ces coordonnées avec le client
  phone: "06 33 55 75 06",
  phoneRaw: "+33633557506",
  email: "contact@kgm-pro-decor.fr",
  city: "Nancy",
  region: "Lorraine, Meurthe-et-Moselle",
  // TODO Gary : confirmer le lien Google My Business + nombre réel d'avis avant de réactiver
  // rating: { value: 5.0, count: 1 },
  responseTime: "Devis gratuit, étudié à la main",
  url: "https://kgm-pro-decor.fr",
} as const;

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  keywords: string[];
  /** "general" (default) = listé partout. "decor" = sous-service décor d'art, listé seulement sur le hub. */
  category?: "general" | "decor";
  /** URL d'une image (Unsplash ou autre) utilisée en hero. Marquée "Illustration" pour transparence. TODO Gary : remplacer par vraies photos de chantiers. */
  heroImage?: string;
};

export const SERVICES: Service[] = [
  {
    slug: "moulure-platre",
    name: "Moulures & ornements en plâtre",
    shortName: "Moulure",
    tagline: "L'ornement qui transforme un plafond.",
    description:
      "Moulures, corniches, rosaces et ornements en plâtre. Conception et pose sur-mesure pour intérieurs neufs comme en rénovation.",
    keywords: ["moulure", "ornement plâtre", "rosace plafond", "corniche", "staff", "plâtre décoratif"],
    heroImage: "https://images.unsplash.com/photo-1759876427033-f109225e439e?fm=jpg&q=70&w=1920&auto=format&fit=crop",
  },
  {
    slug: "peinture-interieure",
    name: "Peinture intérieure",
    shortName: "Peinture intérieure",
    tagline: "Une matière, une lumière, une couleur juste.",
    description:
      "Peinture des murs, plafonds et boiseries. Préparation du support, application en couches selon les règles du métier, du salon à la chambre.",
    keywords: ["peintre intérieur", "peinture intérieure", "peinture salon", "peintre Nancy", "rénovation peinture"],
    heroImage: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?fm=jpg&q=70&w=1920&auto=format&fit=crop",
  },
  {
    slug: "peinture-exterieure",
    name: "Peinture extérieure",
    shortName: "Peinture extérieure",
    tagline: "Protéger, embellir, durer.",
    description:
      "Peintures extérieures techniques, traitements façades, boiseries et menuiseries. Résistance aux intempéries lorraines et tenue dans le temps.",
    keywords: ["peinture extérieure", "peinture façade", "peinture volet", "peinture boiserie extérieur"],
    heroImage: "https://images.unsplash.com/photo-1612935089040-89195ef54677?fm=jpg&q=70&w=1920&auto=format&fit=crop",
  },
  {
    slug: "crepi-facade",
    name: "Crépi & enduit de façade",
    shortName: "Crépi",
    tagline: "La façade qui raconte la maison.",
    description:
      "Application de crépis traditionnels et modernes, enduits décoratifs taloché, gratté, écrasé. Choix des teintes accompagné pour s'inscrire dans le bâti existant.",
    keywords: ["crépi", "enduit façade", "façade taloché", "façade gratté", "crépi maison"],
    heroImage: "https://images.unsplash.com/photo-1494177242659-c726060f48dd?fm=jpg&q=70&w=1920&auto=format&fit=crop",
  },
  {
    slug: "ravalement-facade",
    name: "Ravalement de façade",
    shortName: "Ravalement",
    tagline: "Redonner à la pierre sa première dignité.",
    description:
      "Diagnostic complet de la façade, nettoyage, traitement des fissures, ravalement complet selon les règles de l'art et les exigences locales.",
    keywords: ["ravalement façade", "ravalement Nancy", "rénovation façade", "nettoyage façade", "façade"],
    heroImage: "https://images.unsplash.com/photo-1523878288860-7ad281611901?fm=jpg&q=70&w=1920&auto=format&fit=crop",
  },
  {
    slug: "beton-cire",
    name: "Béton ciré",
    shortName: "Béton ciré",
    tagline: "La matière brute, lissée à la main.",
    description:
      "Sols, plans de travail, salles d'eau en béton ciré. Préparation des supports, application en couches successives, finition imperméable et durable.",
    keywords: ["béton ciré", "sol béton ciré", "plan travail béton ciré", "salle bain béton ciré"],
    heroImage: "https://images.unsplash.com/photo-1541140134513-85a161dc4a00?fm=jpg&q=70&w=1920&auto=format&fit=crop",
  },
  {
    slug: "verriere",
    name: "Verrière",
    shortName: "Verrière",
    tagline: "L'atelier qui structure l'espace.",
    description:
      "Pose de verrières d'atelier, séparations intérieures vitrées. Finitions peinture, intégration avec le bâti existant, ajustements millimétriques.",
    keywords: ["verrière", "verrière atelier", "verrière intérieure", "séparation vitrée"],
    heroImage: "https://images.unsplash.com/photo-1776671183498-72570903b06c?fm=jpg&q=70&w=1920&auto=format&fit=crop",
  },
  {
    slug: "platrier-plaquiste",
    name: "Plâtrier & plaquiste",
    shortName: "Plâtrier / Plaquiste",
    tagline: "Le mur qui se tient droit, plan, prêt.",
    description:
      "Cloisons sèches, doublages isolants, plafonds, enduits plâtre traditionnels. CAP Plâtrier Plaquiste Staffeur, base technique de tout chantier propre.",
    keywords: ["plaquiste", "plâtrier", "cloison placo", "plafond placo", "doublage isolation"],
    heroImage: "https://images.unsplash.com/photo-1531685250784-7569952593d2?fm=jpg&q=70&w=1920&auto=format&fit=crop",
  },
  // ----- DÉCORS D'ART (4 spécialités rares — listées séparément, regroupées dans le hub /services/decors-d-art) -----
  {
    slug: "faux-bois",
    name: "Faux bois peint à la main",
    shortName: "Faux bois",
    tagline: "L'essence du bois, sans le bois.",
    description:
      "Imitation peinte d'essences de bois nobles. Technique décorative traditionnelle pratiquée par Gary depuis vingt ans, transmise au CFA de Pont-à-Mousson.",
    keywords: ["faux bois", "imitation bois", "peinture faux bois", "décor peint bois", "peintre décorateur"],
    category: "decor",
  },
  {
    slug: "faux-marbre",
    name: "Faux marbre peint à la main",
    shortName: "Faux marbre",
    tagline: "La veine, la profondeur, la matière.",
    description:
      "Imitation peinte de marbres rares. Technique décorative ancienne, réservée aux artisans formés au métier de peintre décorateur.",
    keywords: ["faux marbre", "imitation marbre", "peinture faux marbre", "marbrure", "peintre décorateur"],
    category: "decor",
  },
  {
    slug: "faux-ciel",
    name: "Faux ciel peint en trompe-l'œil",
    shortName: "Faux ciel",
    tagline: "Le plafond devient horizon.",
    description:
      "Décor peint en trompe-l'œil qui transforme un plafond en ciel. Nuages, lumière, profondeur — une technique rare, signée à la main.",
    keywords: ["faux ciel", "ciel peint", "trompe l'oeil ciel", "plafond peint", "décor mural"],
    category: "decor",
  },
  {
    slug: "feuille-d-or",
    name: "Dorure à la feuille d'or",
    shortName: "Feuille d'or",
    tagline: "La feuille d'or, posée à la main.",
    description:
      "Pose de feuille d'or sur cadres, sculptures, motifs et ornements. Technique de dorure traditionnelle pratiquée à l'ancienne.",
    keywords: ["feuille d'or", "dorure", "dorure à la feuille", "ornement doré", "décor d'art"],
    category: "decor",
  },
];

/** Services généraux (les 9 services du brief, hors décors d'art) — utilisé dans menus principaux et listings. */
export const GENERAL_SERVICES = SERVICES.filter((s) => s.category !== "decor");

/** 4 décors d'art (faux bois, faux marbre, faux ciel, feuille d'or) — utilisés sur le hub /services/decors-d-art. */
export const DECOR_SERVICES = SERVICES.filter((s) => s.category === "decor");

export type Zone = {
  slug: string;
  name: string;
  postalCode?: string;
  intro: string;
};

// Intros zones : descriptions géographiques factuelles uniquement.
// TODO Gary : si tu veux mentionner des chantiers ou spécialités locales spécifiques par commune, valide-les avec Gary d'abord.
export const ZONES: Zone[] = [
  { slug: "nancy", name: "Nancy", postalCode: "54000", intro: "Préfecture de Meurthe-et-Moselle, cœur de la métropole du Grand Nancy." },
  { slug: "domartemont", name: "Dommartemont", postalCode: "54130", intro: "Commune des coteaux à l'est de Nancy, dans la métropole du Grand Nancy." },
  { slug: "essey-les-nancy", name: "Essey-lès-Nancy", postalCode: "54270", intro: "Commune limitrophe de Nancy à l'est, dans la métropole." },
  { slug: "pont-a-mousson", name: "Pont-à-Mousson", postalCode: "54700", intro: "Ville à mi-chemin entre Nancy et Metz. Gary y intervient également au CFA, où il transmet son savoir." },
  { slug: "frouard", name: "Frouard", postalCode: "54390", intro: "Commune au nord de la métropole du Grand Nancy, au confluent de la Meurthe et de la Moselle." },
  { slug: "nomeny", name: "Nomeny", postalCode: "54610", intro: "Commune du nord de la Meurthe-et-Moselle, en région du Saulnois." },
  { slug: "malzeville", name: "Malzéville", postalCode: "54220", intro: "Commune au nord-est de Nancy, sur le plateau de Malzéville." },
  { slug: "maxeville", name: "Maxéville", postalCode: "54320", intro: "Commune limitrophe de Nancy au nord, dans la métropole du Grand Nancy." },
  { slug: "liverdun", name: "Liverdun", postalCode: "54460", intro: "Commune au nord-ouest de Nancy, en boucle de la Moselle." },
  { slug: "saint-max", name: "Saint-Max", postalCode: "54130", intro: "Commune limitrophe de Nancy à l'est, dans la métropole." },
  { slug: "pulnoy", name: "Pulnoy", postalCode: "54425", intro: "Commune résidentielle à l'est de Nancy, dans la métropole du Grand Nancy." },
  { slug: "tomblaine", name: "Tomblaine", postalCode: "54510", intro: "Commune limitrophe de Nancy à l'est, en bord de Meurthe." },
  { slug: "velaine-en-haye", name: "Velaine-en-Haye", postalCode: "54840", intro: "Commune à l'ouest de Nancy, aux abords de la forêt de Haye." },
];

export const SPECIALITES_GARY = [
  "20 ans d'expérience",
  "CAP Peintre poseur de sol — BP mention décorateur",
  "CAP Plâtrier Plaquiste Staffeur",
  "Intervenant au CFA de Pont-à-Mousson",
  "Spécialités : faux bois, faux marbre, faux ciel, feuille d'or",
];
