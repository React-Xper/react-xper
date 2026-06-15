/** Meridian platform brand — keep in sync with react-xper-ui/site/brand.json */
export const ECOSYSTEM = {
  name: "Meridian",
  tagline: "Precision React interfaces — components, patterns, and canvas.",
  org: "React-Xper",
  orgUrl: "https://github.com/React-Xper",
  accent: "#818cf8",
  accentBright: "#a5b4fc",
};

export const PRODUCTS = {
  ui: {
    id: "ui",
    name: "Meridian UI",
    shortName: "UI",
    description: "Production React component library — Button, Select, Toast, Carousel, and more.",
    siteUrl: "https://react-xper-ui.vercel.app",
    npmUrl: "https://www.npmjs.com/package/react-xper-ui",
    githubUrl: "https://github.com/React-Xper/react-xper-ui",
    install: "npm i react-xper-ui",
  },
  studio: {
    id: "studio",
    name: "Meridian Studio",
    shortName: "Studio",
    description: "Patterns, Konva canvas tools, and interactive galleries.",
    siteUrl: "https://react-xper.vercel.app",
    githubUrl: "https://github.com/React-Xper/react-xper",
  },
};

export const BRAND = {
  name: PRODUCTS.studio.name,
  shortName: PRODUCTS.studio.shortName,
  tagline: "Patterns, canvas, and live component galleries.",
  description: `${PRODUCTS.studio.name} is the interactive workspace for the ${ECOSYSTEM.name} platform.`,
  siteUrl: PRODUCTS.studio.siteUrl,
  uiLibraryUrl: PRODUCTS.ui.siteUrl,
  npmUrl: PRODUCTS.ui.npmUrl,
  githubUrl: PRODUCTS.studio.githubUrl,
  orgUrl: ECOSYSTEM.orgUrl,
  ecosystem: ECOSYSTEM.name,
};
