/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/react/essential-ui-kit/blocks',
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
