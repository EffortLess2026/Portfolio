/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    qualities: [75, 100],
  },
  trailingSlash: true,
};

export default nextConfig;
