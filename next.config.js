const withSass = require('@zeit/next-sass')
module.exports = withSass({
  cssModules: true
}, {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    console.log(isServer)
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
    return config
  },
})
