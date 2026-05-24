import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "54321",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "hapnbhbfbzjgpkbliphk.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  /**
   * Redirects for old blog posts.
   *
   * @returns A promise that resolves to the redirects configuration.
   */
  redirects: async () => [
    {
      source: "/blog",
      destination: "/writing",
      permanent: true,
    },
    {
      source: "/blog/:slug",
      destination: "/writing/:slug",
      permanent: true,
    },
  ],
};

export default nextConfig;
