// next.config.js

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    domains: ['main.d176itksgiqcki.amplifyapp.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 480, 768, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96],
    minimumCacheTTL: 60,
  },
  async headers() {
    return [
      {
        source: '/(images|fonts)/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(static|_next/static)/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
