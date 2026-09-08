import type {
  NavLink,
  Feature,
  Step,
  Testimonial,
  SocialLink,
  FooterColumn,
} from "../types";

export const NAV_LINKS: NavLink[] = [
  { label: "Accueil", href: "#" },
  { label: "Fonctionnalités", href: "#features" },
  { label: "À propos", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const FEATURES: Feature[] = [
  {
    id: "reliable",
    icon: "shield",
    title: "Fiable",
    description: "Des propriétaires vérifiés et des paiements sécurisés.",
  },
  {
    id: "instant",
    icon: "zap",
    title: "Instantané",
    description: "Trouvez et réservez en quelques clics.",
  },
  {
    id: "immersive",
    icon: "play",
    title: "Immersif",
    description: "Visites en vidéo pour une expérience réelle.",
  },
  {
    id: "everywhere",
    icon: "globe",
    title: "Partout",
    description: "Des logements disponibles dans plusieurs villes.",
  },
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: "Explorez",
    description:
      "Faites défiler les logements en vidéo et trouvez celui qui vous plaît.",
    phoneVariant: "explore",
  },
  {
    number: 2,
    title: "Enregistrez",
    description: "Ajoutez vos coups de cœur et retrouvez-les à tout moment.",
    phoneVariant: "save",
  },
  {
    number: 3,
    title: "Contactez",
    description:
      "Échangez avec le propriétaire et réservez facilement.",
    phoneVariant: "contact",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "J'ai trouvé mon appartement en moins de 48h. L'application est intuitive et super pratique !",
    author: "Laurent K.",
    city: "Abidjan",
    avatarSeed: 12,
  },
  {
    id: "t2",
    quote:
      "Les vidéos donnent vraiment une bonne idée du logement. Je recommande à 100%.",
    author: "Aïcha D.",
    city: "Dakar",
    avatarSeed: 25,
  },
  {
    id: "t3",
    quote:
      "Enfin une app immobilière moderne et efficace en Afrique. Bravo l'équipe !",
    author: "Mohamed B.",
    city: "Yaoundé",
    avatarSeed: 8,
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "facebook", href: "#" },
  { platform: "instagram", href: "#" },
  { platform: "tiktok", href: "#" },
  { platform: "youtube", href: "#" },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "À propos",
    links: [
      { label: "Qui sommes-nous ?", href: "#" },
      { label: "Carrières", href: "#" },
      { label: "Presse", href: "#" },
    ],
  },
  {
    heading: "Légal",
    links: [
      { label: "Politique de confidentialité", href: "#" },
      { label: "Conditions d'utilisation", href: "#" },
      { label: "Suppression de compte", href: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Centre d'aide", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Nous contacter", href: "#" },
    ],
  },
];

export const AVATAR_SEEDS = [11, 22, 33, 44];
