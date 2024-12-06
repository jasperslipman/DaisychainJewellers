const nextConfig = {
  webpack: (config) => {
    console.log('Webpack Config:', JSON.stringify(config.module.rules, null, 2));
    return config;
  },
};

module.exports = nextConfig;