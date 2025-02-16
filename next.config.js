const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,

  images: {
    domains: [], 
    deviceSizes: [480, 768, 1280, 1920], 
    imageSizes: [16, 32, 48, 64, 96], 
    formats: ['image/webp'], // Enables WebP for better performance
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  async headers() {
    const isDev = process.env.NODE_ENV === 'development';

    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' ${isDev ? "'unsafe-inline' 'unsafe-eval'" : ''};
              style-src 'self' 'unsafe-inline';
              img-src 'self' data:;
              connect-src 'self';
              font-src 'self';
              frame-ancestors 'none';
              object-src 'none';
            `.replace(/\s{2,}/g, ' ').trim(),
          },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Permissions-Policy', value: 'geolocation=(), camera=(), microphone=()' },
          { key: 'Referrer-Policy', value: 'no-referrer' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
});

module.exports = nextConfig;

