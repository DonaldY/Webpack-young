var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const pluginsConfig = require('../inherit/plugins.config.js');

pluginsConfig.push(
    /* ��ȡ��chunk��css */
    new ExtractTextPlugin({
	filename: '/css/[name].css',
	allChunks: true
    })
);

pluginsConfig.push(
    new webpack.optimize.UglifyJsPlugin()
);

module.exports = pluginsConfig;
