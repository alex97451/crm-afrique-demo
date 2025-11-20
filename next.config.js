// next.config.js
import nextPWA from '@ducanh2912/next-pwa';

const withPWA = nextPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  fallbacks: {
    webpack: (config) => config,
  },
});

const nextConfig = {
  turbopack: {},

  productionBrowserSourceMaps: false,
  webpack(config) {
    config.devtool = false
    return config
  },
}

export default withPWA(nextConfig);