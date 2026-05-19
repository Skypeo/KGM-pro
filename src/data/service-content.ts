// Contenu détaillé par service — alimente /services/[slug]
// Chaque entrée fournit le texte long, la méthode et les cas d'usage.
// Édité ici pour rester séparé des métadonnées dans site.ts.

export type ServiceContent = {
  longDescription: string[];
  pourqui: string;
  methode: { titre: string; texte: string }[];
  faq?: { question: string; reponse: string }[];
};

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "moulure-platre": {
    longDescription: [
      "La moulure en plâtre est un élément décoratif qui structure la lecture d'une pièce et capte la lumière différemment selon l'heure. Corniches, rosaces, médaillons, cimaises.",
      "Gary travaille le plâtre traditionnel et le staff selon les méthodes apprises en CAP Plâtrier Plaquiste Staffeur, puis affinées pendant vingt ans. Pose des ornements, raccord propre avec le plâtre existant.",
      "Que ce soit pour créer un décor neuf ou raccorder à du bâti existant, le travail demande la même attention au détail — c'est ce qui distingue une moulure intégrée d'une moulure rapportée.",
    ],
    pourqui:
      "Particuliers en rénovation ou en construction neuve qui souhaitent intégrer des moulures et ornements en plâtre dans leur intérieur.",
    methode: [
      { titre: "Relevé sur place", texte: "Mesures précises, repérage des éléments existants, lecture du style architectural pour proposer une moulure cohérente." },
      { titre: "Choix du profil", texte: "Catalogue de profils classiques et création sur-mesure si la pièce le justifie. Modèle proposé avant exécution." },
      { titre: "Pose et raccord", texte: "Découpe d'angle propre, scellement au plâtre, traitement des joints. Aucun rebouchage visible." },
      { titre: "Finition peinture", texte: "Mise en peinture intégrée si demandé : la moulure ne se voit que par sa forme, pas par un défaut de raccord." },
    ],
  },
  "peinture-interieure": {
    longDescription: [
      "Une peinture intérieure réussie tient d'abord à la préparation du support — souvent invisible une fois terminée, mais déterminante pour la tenue de la finition.",
      "Le choix de la peinture se fait avec le client, en fonction de la pièce, de la lumière et de l'usage. Gary conseille la finition la plus adaptée à chaque cas.",
      "L'application est faite à la main, au rouleau et au pinceau selon le rendu visé.",
    ],
    pourqui:
      "Rénovation d'appartements ou de maisons, mise en peinture après plâtrerie, décoration de pièces de vie, chambres.",
    methode: [
      { titre: "Diagnostic du support", texte: "Identification des anciennes couches, tests d'adhérence, repérage des fissures et reprises nécessaires." },
      { titre: "Préparation", texte: "Ponçage, rebouchage, sous-couche adaptée. C'est 60 % du temps d'un chantier propre." },
      { titre: "Application", texte: "Deux couches minimum, croisées pour éviter les traces. Temps de séchage respecté entre les passes." },
      { titre: "Réception", texte: "Vérification à la lumière rasante, retouches éventuelles, nettoyage complet du chantier." },
    ],
  },
  "peinture-exterieure": {
    longDescription: [
      "Les peintures extérieures lorraines doivent encaisser le cycle gel/dégel, les pluies et les écarts thermiques marqués. Le choix du produit conditionne la tenue dans le temps.",
      "Gary sélectionne une peinture adaptée au support (enduit, bois, métal) et à l'exposition. Le choix est documenté pour chaque chantier.",
      "Préparation du support, application en respectant les conditions météo recommandées par le fabricant.",
    ],
    pourqui:
      "Façades enduites, volets en bois, menuiseries, garde-corps, portails. Maisons individuelles, immeubles en copropriété.",
    methode: [
      { titre: "Nettoyage profond", texte: "Décapage haute pression, traitement antimousse, séchage complet du support avant tout produit." },
      { titre: "Traitement des défauts", texte: "Reprise des fissures, rebouchage, ponçage. Application d'une primaire adaptée au support." },
      { titre: "Application", texte: "Deux à trois couches selon le produit. Travail à l'écart des heures les plus chaudes." },
      { titre: "Contrôle", texte: "Vérification de l'homogénéité, des raccords, des points sensibles (angles, scellements)." },
    ],
  },
  "crepi-facade": {
    longDescription: [
      "Le crépi n'est pas qu'une couche de finition : c'est ce qui protège l'enduit de base et donne à la façade son caractère.",
      "Gary applique différentes finitions selon le style recherché : taloché, gratté, écrasé ou ribbé.",
      "Le choix de la teinte est accompagné — un crépi mal coordonné avec les volets ou la toiture peut déstabiliser visuellement toute la maison.",
    ],
    pourqui:
      "Maisons neuves à finir, façades à reprendre, dépendances et annexes.",
    methode: [
      { titre: "Préparation du support", texte: "Vérification de la planéité de l'enduit, traitement des défauts, application d'un fond éventuel." },
      { titre: "Choix de la finition", texte: "Échantillons sur place pour valider la teinte et la texture. Pas de surprise au démoulage." },
      { titre: "Application", texte: "Projection ou tirage manuel selon la finition. Travail en bandes continues pour éviter les raccords visibles." },
      { titre: "Protection des abords", texte: "Bâchage des menuiseries, sols, plantations. Nettoyage complet au repli." },
    ],
  },
  "ravalement-facade": {
    longDescription: [
      "Un ravalement réussi commence par un diagnostic honnête. Toutes les façades ne demandent pas un ravalement complet — parfois un nettoyage et une reprise ciblée suffisent.",
      "Quand le ravalement est nécessaire, Gary décape, traite les défauts, refait l'enduit là où il s'effrite, et applique une finition adaptée au bâti.",
      "Pour les bâtiments anciens, le choix des produits est adapté au support — l'objectif est toujours que la façade puisse respirer.",
    ],
    pourqui:
      "Maisons individuelles, façades dégradées, copropriétés en obligation de ravalement.",
    methode: [
      { titre: "Diagnostic", texte: "État des lieux complet, identification des pathologies (humidité, salpêtre, fissures actives ou stabilisées)." },
      { titre: "Décapage", texte: "Retrait des anciennes peintures ou enduits incompatibles. Préparation de la peau du mur." },
      { titre: "Reprise structurelle", texte: "Traitement des fissures, scellement des éclats, rejointoiement des pierres si nécessaire." },
      { titre: "Finition", texte: "Enduit ou peinture adaptée. Choix accompagné, échantillon validé avant grande surface." },
    ],
  },
  "beton-cire": {
    longDescription: [
      "Le béton ciré est un revêtement de tendance mais piégeux : mal posé, il se fissure, se tache ou se ternit. Bien posé, il dure dans le temps en gagnant en patine.",
      "Gary applique le béton ciré en plusieurs passes, avec respect des temps de séchage entre chaque, puis applique une finition de protection.",
      "Finition adaptée à l'usage : douche, plan de travail, sol. Chaque cas demande un protocole différent.",
    ],
    pourqui:
      "Salles d'eau, cuisines, sols de pièces à vivre. Rénovations contemporaines.",
    methode: [
      { titre: "Préparation du support", texte: "Le béton ciré demande un support stable. Diagnostic du sol ou plan, traitement des défauts, primaire d'accroche." },
      { titre: "Application couches", texte: "Deux à trois passes en couches fines, croisées, lissées à la spatule métallique." },
      { titre: "Ferrage et patine", texte: "Lissage final pour densifier la matière. Patine de couleur si choisie avec le client." },
      { titre: "Protection", texte: "Vernis hydrofuge ou cire selon l'usage. Entretien expliqué et documenté." },
    ],
  },
  verriere: {
    // TODO Gary : valider le périmètre exact (fabrication propre ? pose seule ? collaboration ferronnier ?)
    longDescription: [
      "La verrière d'atelier structure un espace sans le cloisonner. Pose, finitions peinture, intégration avec le sol et le plafond : c'est la précision du raccord qui fait la différence.",
      "Gary intervient sur la pose et la finition de la verrière. La mise en peinture est intégrée — la structure ne doit pas paraître rapportée.",
    ],
    pourqui:
      "Séparations cuisine/salon, créations d'entrées, bureaux en open-space. Appartements rénovés, maisons individuelles.",
    methode: [
      { titre: "Prise de cotes", texte: "Mesure précise de l'ouverture, repérage des murs porteurs et des passages techniques." },
      { titre: "Préparation", texte: "Préparation du support et du périmètre avant pose." },
      { titre: "Pose", texte: "Mise en place, scellement, ajustement à la cale. Vérification de l'équerrage avant fixation définitive." },
      { titre: "Finition peinture", texte: "Mise en peinture de la structure et du périmètre, intégration sans raccord visible." },
    ],
  },
  "faux-bois": {
    longDescription: [
      "Le faux bois est une technique décorative qui consiste à peindre l'imitation d'une essence de bois sur un support — porte, panneau, boiserie, élément de mobilier.",
      "L'œil cherche à reconnaître les veines, les nœuds, les nuances de l'essence imitée. Tout se joue sur la lumière, la matière et la patience du geste.",
      "Gary pratique le faux bois depuis vingt ans et l'enseigne au CFA de Pont-à-Mousson. Chaque pièce est unique — l'essence à imiter est choisie ensemble avant exécution.",
    ],
    pourqui:
      "Particuliers et professionnels qui souhaitent intégrer un faux bois peint sur une porte, une boiserie, un panneau ou un élément de mobilier.",
    methode: [
      { titre: "Choix de l'essence", texte: "Échantillon ou référence de l'essence à imiter (chêne, noyer, acajou…). Lecture du veinage." },
      { titre: "Essai sur tablette", texte: "Réalisation d'un échantillon présenté au client pour validation du rendu avant exécution." },
      { titre: "Exécution à la main", texte: "Préparation du support, application des fonds, dessin du veinage, glacis, temps de séchage respectés." },
      { titre: "Protection", texte: "Vernis ou cire de finition selon l'effet visé et l'exposition du support." },
    ],
  },
  "faux-marbre": {
    longDescription: [
      "Le faux marbre est l'imitation peinte d'un marbre — veine, profondeur, nuances, brillance — sur un support quelconque (manteau de cheminée, plinthe, niche, panneau).",
      "C'est une technique décorative ancienne, longtemps réservée aux décorateurs des grands intérieurs. Elle demande un œil entraîné et une main lente.",
      "Gary la pratique depuis vingt ans et la transmet au CFA de Pont-à-Mousson. Chaque marbre imité est unique — le modèle est choisi ensemble.",
    ],
    pourqui:
      "Particuliers et professionnels qui souhaitent intégrer un faux marbre sur un manteau de cheminée, une plinthe, un panneau décoratif ou un ornement.",
    methode: [
      { titre: "Choix du marbre", texte: "Référence du marbre à imiter (Carrare, Portor, Sarrancolin, vert antique…). Lecture des veines et nuances." },
      { titre: "Essai sur tablette", texte: "Échantillon présenté au client pour valider couleur, veine et rendu général avant exécution." },
      { titre: "Exécution à la main", texte: "Application des fonds, dessin des veines au pinceau et à la plume, glacis successifs, polissage." },
      { titre: "Protection", texte: "Vernis brillant ou satiné selon le marbre imité, pour la profondeur et la tenue dans le temps." },
    ],
  },
  "faux-ciel": {
    longDescription: [
      "Le faux ciel est un décor peint en trompe-l'œil qui transforme un plafond en horizon — nuages, lumière, profondeur, parfois oiseaux ou architecture.",
      "Le résultat est saisissant : un plafond peint en trompe-l'œil change toute la lecture d'une pièce. C'est l'une des techniques décoratives les plus marquantes du métier.",
      "Gary pratique le faux ciel depuis vingt ans et le transmet au CFA de Pont-à-Mousson. Chaque ciel est unique — composé pour la pièce qui l'accueille.",
    ],
    pourqui:
      "Particuliers et professionnels qui souhaitent transformer un plafond en décor peint — salon, chambre, hall d'entrée, restaurant, lieu de réception.",
    methode: [
      { titre: "Composition", texte: "Discussion sur la lumière souhaitée, l'ambiance, le moment de la journée. Étude des dimensions et de la perspective." },
      { titre: "Essai", texte: "Réalisation d'un fragment ou d'une maquette pour valider la direction avant attaque du plafond." },
      { titre: "Exécution à la main", texte: "Préparation du support, application des fonds dégradés, peinture des nuages et des effets de lumière, retouches." },
      { titre: "Finition", texte: "Vernis mat ou satiné selon le rendu visé. Le ciel doit rester naturel, sans brillance qui le trahisse." },
    ],
  },
  "feuille-d-or": {
    longDescription: [
      "La dorure à la feuille d'or est une technique de décoration consistant à appliquer de fines feuilles d'or véritable (ou de métal doré) sur un support — cadre, sculpture, moulure, motif peint.",
      "C'est un savoir-faire ancien qui demande de la patience et un geste sûr : la feuille est extrêmement fine et fragile, et chaque erreur se voit.",
      "Gary pratique la dorure à la feuille depuis vingt ans et la transmet au CFA de Pont-à-Mousson.",
    ],
    pourqui:
      "Particuliers et professionnels qui souhaitent intégrer une dorure sur un cadre, une sculpture, une moulure, un détail d'ornement ou un motif peint.",
    methode: [
      { titre: "Préparation du support", texte: "Le support doit être lisse et stable. Application d'une assiette colorée qui donnera la teinte de fond derrière l'or." },
      { titre: "Application de la mixtion", texte: "Mixtion (colle spéciale) appliquée à la zone à dorer. Temps de prise respecté avant la pose de la feuille." },
      { titre: "Pose de la feuille", texte: "La feuille est posée à l'aide d'un pinceau spécial, lissée puis brossée pour faire tomber les surplus." },
      { titre: "Finition", texte: "Brunissage éventuel, vernis de protection selon l'usage et l'exposition." },
    ],
  },
  "platrier-plaquiste": {
    longDescription: [
      "Avant la peinture, il y a le mur. Plat, droit, sec. C'est le travail du plâtrier-plaquiste — un travail invisible une fois terminé, mais qui conditionne tout le reste.",
      "Gary intervient en plaquerie pour les cloisons sèches, doublages, plafonds suspendus, et en plâtrerie traditionnelle pour les enduits, les staffs et les ornements coulés.",
      "CAP Plâtrier Plaquiste Staffeur d'origine : c'est la base technique de tout chantier propre.",
    ],
    pourqui:
      "Création de cloisons en rénovation, doublages thermiques, plafonds neufs, reprises après dépose.",
    methode: [
      { titre: "Implantation", texte: "Traçage au sol et au plafond, repérage des points techniques (gaines, prises, interrupteurs)." },
      { titre: "Ossature", texte: "Montants métalliques posés au niveau, espacement réglementaire, traitement acoustique si demandé." },
      { titre: "Plaque et isolation", texte: "Pose des plaques, intégration de l'isolant, vissage selon entraxe, joints renforcés." },
      { titre: "Finition prête à peindre", texte: "Bandes, enduit de finition, ponçage. Mur livré prêt à recevoir la peinture." },
    ],
  },
};
