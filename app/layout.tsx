import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { data } from "@/lib/data";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${data.name} — ${data.role}`,
  description: data.tagline,
  openGraph: {
    title: `${data.name} — ${data.role}`,
    description: data.tagline,
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Applies the saved theme before first paint. Without this the page renders
// dark for a frame and then flips, which is very visible on a light setup.
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (!t) t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.documentElement.dataset.theme = t;
  } catch (e) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${sans.variable} ${mono.variable}`}>
      <body>
        {/* First child of body so it runs before any content paints.
            Rendering a manual <head> in the App Router can conflict with
            Next's own metadata handling, so it goes here instead. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
