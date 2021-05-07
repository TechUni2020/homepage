const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    css: {
        extract: true,
    },
    chainWebpack(config) {
        config.plugins.delete('prefetch');
        config.plugin('CompressionPlugin').use(CompressionPlugin);
    }
};
