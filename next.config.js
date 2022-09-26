/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n:{
    defaultLocale:"en",
    locales: ["en", "es"],
    localeDetection: false,
  }
}

module.exports = nextConfig
