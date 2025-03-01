module.exports = {
  experimental: {
    webpack5: true,
  },
  webpack: (config) => {
    config.externals = [...config.externals, 'undici'];
    return config;
  },
};
