import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = { width: 17, height: 17, "aria-hidden": true } as const;

export function GithubIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...base} {...p}>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...base} {...p}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function MailIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...base} {...p}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function ScholarIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...base} {...p}>
      <path d="M12 2 0 9l12 7 9.5-5.54V17H24V9L12 2ZM5 14.2V18c0 2.2 3.13 4 7 4s7-1.8 7-4v-3.8l-7 4.1-7-4.1Z" />
    </svg>
  );
}

export function GlobeIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...base} {...p}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M2.8 12h18.4M12 2.8c2.4 2.6 3.6 5.7 3.6 9.2s-1.2 6.6-3.6 9.2c-2.4-2.6-3.6-5.7-3.6-9.2S9.6 5.4 12 2.8Z" />
    </svg>
  );
}

export function MenuIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor"
         strokeWidth={1.75} aria-hidden {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

/** Maps a data.links key to its icon. Unknown keys fall back to the globe. */
export function LinkIcon({ name }: { name: string }) {
  switch (name) {
    case "github":   return <GithubIcon />;
    case "linkedin": return <LinkedinIcon />;
    case "email":    return <MailIcon />;
    case "scholar":  return <ScholarIcon />;
    default:         return <GlobeIcon />;
  }
}
