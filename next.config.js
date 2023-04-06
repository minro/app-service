/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    loader: "custom",
    loaderFile: "./utils/image/loader.ts",
  }
}

module.exports = nextConfig
