/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  
  basePath: "/proyecto-final-Theneillsaaco",
  assetPrefix: "/proyecto-final-Theneillsaaco"
};

export default nextConfig;
