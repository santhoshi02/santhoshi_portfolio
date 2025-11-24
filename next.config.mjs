/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                  // THIS enables "next export"
  images: {
    unoptimized: true,               // needed for next/image during export
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
