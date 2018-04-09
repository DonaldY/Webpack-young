var webpack = require('webpack');

const pluginsConfig = require('../inherit/plugins.config.js');

pluginsConfig.push(
    /* ³éÈ¡³öchunkµÄcss */
    new ExtractTextPlugin({
	filename: '/css/[name].css',
	allChunks: true
    })
);

module.exports = pluginsConfig;
