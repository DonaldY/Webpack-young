var webpack = require('webpack');

const pluginsConfig = require('../inherit/plugins.config.js');

pluginsConfig.push(
    /* ��ȡ��chunk��css */
    new ExtractTextPlugin({
	filename: '/css/[name].css',
	allChunks: true
    })
);

module.exports = pluginsConfig;
