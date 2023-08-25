await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: !true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  ignoreDuringBuilds: true,
};

export default config;
