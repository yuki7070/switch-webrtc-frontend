const withPWA = require("next-pwa");
const runtimeCaching = require('next-pwa/cache')

/** @type {import('next').NextConfig} */

const config = {
  pwa: {
    dest: 'public',
  },
  reactStrictMode: true,
  buildExcludes: [/.*\.js\.map/]
}

module.exports = withPWA(config)
