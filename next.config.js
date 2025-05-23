/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'superstack.xyz',
      }
    ],
  },

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Configure output mode (optional)
  output: 'standalone',

  // Configure powered by header (optional)
  poweredByHeader: false,

  // Configure compression (optional)
  compress: true,

  // Configure custom headers (optional)
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
