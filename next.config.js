/** @type {import('next').NextConfig} */

const path = require('path');
const withReactSvg = require('next-react-svg');

module.exports = withReactSvg({
  swcMinify: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'localhost',
        'ireland.apollo.olxcdn.com'
    ],
  },
  typescript: {
    ignoreBuildErrors: false
  },
  output: {
    globalObject: 'this'
  },
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:8081/:path*',
        },
      ]
    },
  include: path.resolve(__dirname, 'src/assets'),
  experimental: {
    // Defaults to 50MB
    isrMemoryCacheSize: 0,
  },
})
