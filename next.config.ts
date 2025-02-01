import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'plus.unsplash.com',
      'cdn.sanity.io',
      'images.unsplash.com',
      'next-ecommerce-template-4.vercel.app' // Add this domain
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'next-ecommerce-template-4.vercel.app',
        port: '',
        pathname: '**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint checks during production builds
  },
};

export default nextConfig;
