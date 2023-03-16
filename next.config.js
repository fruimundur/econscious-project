/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['uacyvtcygmdnzwicfuvv.supabase.co'],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/',
      //   permanent: true,
      // },
    ];
  },
};

module.exports = nextConfig;