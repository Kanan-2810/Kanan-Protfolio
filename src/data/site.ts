export const site = {
  name: "Kanan Dave",
  initials: "K",
  role: "Product, AI & Engineer",
  location: "Ahmedabad, India - working worldwide",
  availability: "Available for Q3 projects",
  email: "kanandave2810@gmail.com",
  phone: "+91 00000 00000",
  whatsappMessage:
    "Hi Kanan, I saw your portfolio and would like to talk about a project.",
  resumeUrl: "/pdf/Kanan_Resume.pdf",
  /**
   * Background-removed portraits, floated over the hero arch and the FAQ card.
   * WebP because they need an alpha channel and images are served unoptimised -
   * lossless PNG of the same cutout is roughly nine times the weight.
   */
  portraitCutout: "/images/kanan-cutout.webp",
  avatarCutout: "/images/kanan-avatar.webp",
  /** Studio portrait for the About card. */
  portraitStudio: "/images/kanan-portrait-studio.jpg",
  /** Original photograph the hero cutout is derived from. */
  portrait: "/images/kanan-photo.jpg",
  intro:
    "I turn ideas into production-ready AI products - SaaS, RAG systems, and intelligent workflows.",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
] as const;

export const socials = [
  { label: "LinkedIn", short: "In", href: "https://www.linkedin.com/in/kanan-dave/" },
  { label: "Dribbble", short: "Dr", href: "https://dribbble.com" },
  { label: "Behance", short: "Be", href: "https://www.behance.net" },
  { label: "Instagram", short: "Ig", href: "https://www.instagram.com" },
] as const;

export const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#work" },
  { label: "Blog", href: "#insights" },
] as const;

export type HeroTag = {
  label: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  /** Degrees of tilt, so the tags read as stickers rather than UI chips. */
  rotate: number;
  delay: string;
};

/**
 * Positioned as percentages of the hero arch. Offsets stay small enough that
 * the tags clear the panel edge at the narrowest desktop width, and the right
 * column keeps clear of the floating stat cards below it.
 */
export const heroTags: HeroTag[] = [
  { label: "UI/UX", top: "30%", left: "6%", rotate: -8, delay: "0s" },
  { label: "Product Design", top: "12%", right: "4%", rotate: 7, delay: "1.1s" },
  { label: "Branding", bottom: "26%", left: "2%", rotate: -5, delay: "2.2s" },
];

/** Oversized watermark behind the hero portrait. */
export const heroWordmark = [
  "ENGINEER",
  "FREELANCER",
  "DEVELOPER",
  "DESIGNER",
  "BUILDER",
  "THINKER",
] as const;

/** The two cards that float over the right of the hero arch. */
export const heroStats = [
  { label: "Years crafting digital products", value: "3+" },
  { label: "Successful client projects", value: "10+" },
] as const;

export const clientLogos = [
  "LeadGPT",
  "Kaushal Dave",
  "Excell",
  "Optimiz",
  "Gurukul",
  "Halcyon",
  "Tessella",
  "Brightside",
] as const;
