/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  
  basePath: "/project",
  assetPrefix: "/project"
};

export default nextConfig;
