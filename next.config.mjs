/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  i18n: {
    locales: ['en', 'tr'], // Desteklenen diller
    defaultLocale: 'en', // Varsayılan dil
  },
  reactStrictMode: true,
};

export default bundleAnalyzer(nextConfig);
