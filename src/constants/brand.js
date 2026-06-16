/** Uilerial — keep in sync with uilerial/site/brand.json */
export const ECOSYSTEM = {
  name: "Techlestial",
  tagline: "Open-source technology studio — developer tools and React interfaces.",
  org: "Techlestial",
  orgUrl: "https://github.com/techlestial",
  accent: "#818cf8",
  accentBright: "#a5b4fc",
};

export const PRODUCTS = {
  ui: {
    id: "ui",
    name: "Uilerial",
    shortName: "UI",
    description: "Production React component library — Button, Select, Toast, Carousel, and more.",
    siteUrl: "https://uilerial.vercel.app",
    npmUrl: "https://www.npmjs.com/package/@techlestial/uilerial",
    githubUrl: "https://github.com/techlestial/uilerial",
    install: "npm i @techlestial/uilerial",
  },
  studio: {
    id: "studio",
    name: "Uilerial Studio",
    shortName: "Studio",
    description: "Patterns, Konva canvas tools, and interactive galleries.",
    siteUrl: "https://uilerial-studio.vercel.app",
    githubUrl: "https://github.com/techlestial/uilerial-studio",
  },
};

export const BRAND = {
  name: PRODUCTS.studio.name,
  shortName: PRODUCTS.studio.shortName,
  tagline: "Patterns, canvas, and live component galleries.",
  description: `${PRODUCTS.studio.name} — interactive React lab for ${PRODUCTS.ui.name} components.`,
  siteUrl: PRODUCTS.studio.siteUrl,
  uiLibraryUrl: PRODUCTS.ui.siteUrl,
  npmUrl: PRODUCTS.ui.npmUrl,
  githubUrl: PRODUCTS.studio.githubUrl,
  orgUrl: ECOSYSTEM.orgUrl,
  ecosystem: ECOSYSTEM.name,
};
