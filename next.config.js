// next.config.js
module.exports = {
  webpack: (config) => {
    // Add rule for SVGs with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    domains: ['main.d176itksgiqcki.amplifyapp.com'], // Allowed image domains
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 480, 768, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96],
    minimumCacheTTL: 60,
  },
  async headers() {
    return [
      // Cache control for images and fonts
      {
        source: '/(images|fonts)/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache control for static assets
      {
        source: '/(static|_next/static)/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      /* 
      // Content-Security-Policy header
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self'; 
              script-src 'self' 'unsafe-inline'; 
              style-src 'self' 'unsafe-inline'; 
              img-src 'self' data: https://main.d176itksgiqcki.amplifyapp.com; 
              connect-src 'self'; 
              font-src 'self';
              object-src 'none';
              frame-src 'none';
              base-uri 'self';
              form-action 'self';
            `.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
      */ 
    ];
  },
};
