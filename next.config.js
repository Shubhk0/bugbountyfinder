/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.externals = [...config.externals, 'undici'];
    return config;
  },
};
