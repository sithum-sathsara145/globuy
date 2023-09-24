/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dkm0ap16q/image/upload/**',
          },
        ],
      },
}

module.exports = nextConfig
