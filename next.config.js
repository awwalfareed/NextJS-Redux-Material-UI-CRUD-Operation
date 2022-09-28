/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["cdn.pixabay.com", "pbs.twimg.com", "truetns3.fra1.digitaloceanspaces.com",],
  }
}

module.exports = nextConfig
