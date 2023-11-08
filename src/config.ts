// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Robert Scheidegger";
export const SITE_DESCRIPTION = "Portfolio site of Robert Scheidegger";
export const MY_NAME = "Robert Scheideger";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
