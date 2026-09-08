// ── Navigation ─────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

// ── Feature card ────────────────────────────────────────────
export interface Feature {
  id: string;
  icon: "shield" | "zap" | "play" | "globe";
  title: string;
  description: string;
}

// ── How-it-works step ───────────────────────────────────────
export interface Step {
  number: number;
  title: string;
  description: string;
  phoneVariant: "explore" | "save" | "contact";
}

// ── Testimonial ─────────────────────────────────────────────
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  city: string;
  avatarSeed: number;
}

// ── Social link ─────────────────────────────────────────────
export interface SocialLink {
  platform: "facebook" | "instagram" | "tiktok" | "youtube";
  href: string;
}

// ── Footer column ───────────────────────────────────────────
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

// ── App Store Button ────────────────────────────────────────
export type StoreType = "apple" | "google";
