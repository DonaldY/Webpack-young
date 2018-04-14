var webpack = require('webpack');

const pluginsConfig = require('../inherit/plugins.config.js');

pluginsConfig.push(new webpack.HotModuleReplacementPlugin());

pluginsConfig.push(new webpack.DefinePlugin({
    IS_PRODUCTION: false
}));


module.exports = pluginsConfig;
