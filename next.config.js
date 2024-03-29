const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
  images: {
    domains: ['avatars0.githubusercontent.com', 'firebasestorage.googleapis.com', 'images.unsplash.com']
  },
  output: 'standalone'
})