/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '',
    async rewrites() {
        return [
          {
            source: "/react/essential-ui-kit/blocks/assets/:path*",
            destination: "/assets/:path*", // Preserve everything after "assets/"
          },
          {
            source: '/:path*',
            destination: '/blocks-section/:path*',
          },
        ];
      },
};

export default nextConfig;
