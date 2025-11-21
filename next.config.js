// next.config.js
import nextPWA from '@ducanh2912/next-pwa';

const withPWA = nextPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /^https?:.*\/mini-site\/.*$/,
      handler: 'StaleWhileRevalidate',
      options: { cacheName: 'mini-site-pages' },
    },
    {
      urlPattern: /^https?:\/\/[^/]+\/_next\/static\/.*$/,
      handler: 'CacheFirst',
      options: { cacheName: 'static-assets' },
    },
    {
      urlPattern: /^https?:\/\/[^/]+\/icons\/.*$/,
      handler: 'CacheFirst',
      options: { cacheName: 'icons' },
    },
  ],
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