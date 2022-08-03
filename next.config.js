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
  include: path.resolve(__dirname, 'src/assets')
})
