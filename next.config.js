/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { isServer }) {
      // For the client
      if (!isServer) {
        config.module.rules.push({
          test: /\.svg$/,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        });
      }
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  