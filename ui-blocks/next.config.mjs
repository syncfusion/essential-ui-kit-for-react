/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/:path*',
            destination: '/blocks-section/:path*',
          },
        ];
      },
};

export default nextConfig;
