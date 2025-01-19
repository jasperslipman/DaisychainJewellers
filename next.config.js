/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enforce React best practices
  images: {
    domains: [], // Add image domains here if needed
  },
  webpack: (config) => {
    // Add rule for SVGs with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
