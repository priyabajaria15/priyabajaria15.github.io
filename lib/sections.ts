import { data } from "./data";

export interface Section {
  id: string;
  label: string;
}

/**
 * Nav entries for sections that actually have content. Empty an array in
 * data.ts and both the section and its nav link disappear together.
 */
export const sections: Section[] = (
  [
    { id: "about", label: "About", show: data.about.length > 0 },
    { id: "skills", label: "Skills", show: data.skills.length > 0 },
    { id: "experience", label: "Experience", show: data.experience.length > 0 },
    { id: "projects", label: "Projects", show: data.projects.length > 0 },
    { id: "education", label: "Education", show: data.education.length > 0 },
    { id: "certifications", label: "Certifications", show: data.certifications.length > 0 },
    { id: "publications", label: "Publications", show: data.publications.length > 0 },
    { id: "contact", label: data.contact.heading, show: true },
  ] as const
)
  .filter((s) => s.show)
  .map(({ id, label }) => ({ id, label }));

export const LINK_LABELS: Record<string, string> = {
  email: "Email",
  github: "GitHub",
  linkedin: "LinkedIn",
  scholar: "Google Scholar",
  website: "Website",
};

/** [key, url] pairs for links that are actually filled in. */
export const activeLinks: [string, string][] = Object.entries(data.links).filter(
  (entry): entry is [string, string] => typeof entry[1] === "string" && entry[1].trim() !== ""
);

export const hrefFor = (key: string, value: string) =>
  key === "email" ? `mailto:${value}` : value;
