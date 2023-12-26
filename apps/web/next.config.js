/** @type {import('next').NextConfig} */
const headers = [{ key: 'Cache-Control', value: 'public, max-age=3600' }]
const moduleExports = {
  experimental: {
    scrollRestoration: true
  },
  async headers() {
    return [
      {
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin' }
        ],
        source: '/(.*)'
      },
      { headers, source: '/terms' },
      { headers, source: '/privacy' },
      { headers, source: '/thanks' }
    ]
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: process.env.NODE_ENV === 'production',
  async redirects() {
    return [
      {
        destination: '/u/:handle',
        permanent: true,
        source: '/channel/:handle(.+).lens'
      },
      {
        destination: '/u/:handle',
        permanent: true,
        source: '/channel/:handle(.+).test'
      },
      {
        destination: '/u/:handle',
        permanent: true,
        source: '/channel/:handle'
      },
      {
        destination: '/u/:namespace/:handle',
        permanent: true,
        source: '/channel/:namespace/:handle'
      },
      {
        destination:
          'https://discord.com/servers/tape-formerly-lenstube-980882088783913010',
        permanent: true,
        source: '/discord'
      },
      {
        destination: 'https://giveth.io/project/tape',
        permanent: true,
        source: '/donate'
      },
      {
        destination:
          'https://explorer.gitcoin.co/#/round/424/0xd4cc0dd193c7dc1d665ae244ce12d7fab337a008/0xd4cc0dd193c7dc1d665ae244ce12d7fab337a008-5',
        permanent: true,
        source: '/gitcoin'
      }
    ]
  },
  async rewrites() {
    return [
      {
        destination: 'https://static.tape.xyz/sitemaps/:match*',
        source: '/sitemaps/:match*'
      }
    ]
  },
  transpilePackages: [
    '@tape.xyz/lens',
    '@tape.xyz/browser',
    '@tape.xyz/generic',
    '@tape.xyz/ui'
  ]
}

module.exports = moduleExports
