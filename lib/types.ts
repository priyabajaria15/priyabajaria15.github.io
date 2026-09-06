// Shape of the content in data.ts. TypeScript will flag a typo'd key or a
// missing required field before the site ever builds.

export type LinkKey = "email" | "github" | "linkedin" | "scholar" | "website";

export type Links = Partial<Record<LinkKey, string>>;

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Job {
  role: string;
  org: string;
  url?: string;
  start: string;
  end: string;
  location?: string;
  bullets: string[];
  tech?: string[];
}

export interface Project {
  title: string;
  blurb: string;
  /** Detailed stack, rendered as chips on the card. */
  tech?: string[];
  /** Coarse categories that drive the filter buttons. Falls back to `tech`. */
  tags?: string[];
  image?: string;
  repo?: string;
  demo?: string;
  /** Renders full-width in the grid. Use on one project at most. */
  featured?: boolean;
}

export interface Education {
  degree: string;
  school: string;
  start: string;
  end: string;
  detail?: string;
  courses?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  id?: string;
  url?: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  url?: string;
  note?: string;
}

export interface ContactBlock {
  heading: string;
  blurb: string;
  /** Empty string falls back to opening the visitor's mail client. */
  formEndpoint: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  location: string;
  photo: string;
  resume: string | null;
  tagline: string;
  links: Links;
  about: string[];
  skills: SkillGroup[];
  experience: Job[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  publications: Publication[];
  contact: ContactBlock;
}
