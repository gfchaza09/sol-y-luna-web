/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "loremflickr.com",
      "lh3.googleusercontent.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.*",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN:
      "pk.eyJ1IjoiZ2ZjaGF6YTA5IiwiYSI6ImNsZjIxaXI5ZDAzMzkzeG1veDZsNTMzbG8ifQ.JFi25asPOPU568PgXB6tZw",
  },
};

module.exports = nextConfig;
