/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'neurofit-akademie.de',
      },
    ],
  },
}

module.exports = nextConfig