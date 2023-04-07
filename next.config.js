/** @type {import('next').NextConfig} */
const nextConfig = {

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      }
    ]
  },

  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
