const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  configureWebpack: config => {
    config.plugins = config.plugins.concat(
      new WebpackAssetsManifest({
        output: 'asset-manifest.json',
        customize(entry, original, manifest, asset) {
          return {
            key: `/${entry.key}`,
            value: `/${entry.value}`,
          };
        }
      })
    )
  }
};
