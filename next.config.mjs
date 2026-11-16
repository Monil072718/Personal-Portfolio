/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cpus: 1,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        missing: [
          {
            type: "query",
            key: "home",
          },
        ],
        destination: "/projects",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
