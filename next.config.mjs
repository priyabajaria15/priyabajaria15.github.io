/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emits a plain static site into out/ — required for GitHub Pages,
  // which has no Node server to run.
  output: "export",

  // The Next image optimizer needs a server, so it must be off.
  images: { unoptimized: true },

  // Writes out/about/index.html instead of out/about.html, which is
  // what static hosts expect.
  trailingSlash: true,
};

export default nextConfig;
