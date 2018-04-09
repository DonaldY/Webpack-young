var webpack = require('webpack');

const pluginsConfig = require('../inherit/plugins.config.js');

pluginsConfig.push(new webpack.HotModuleReplacementPlugin());


module.exports = pluginsConfig;
