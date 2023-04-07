/** @type {import('next').NextConfig} */
const nextConfig = {

  async headers() {
    return [
      {
        source: '/about',
        headers: [
          {
            key: 'Cache-Control',
            value: 'max-age=3600',
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
