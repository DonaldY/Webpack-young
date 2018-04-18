var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var dirVars = require('../base/dir-vars.config.js');
var PurifyCssPlugin = require('purifycss-webpack');
var glob = require('glob-all');

const pluginsConfig = require('../inherit/plugins.config.js');

pluginsConfig.push(
    /* 抽取出chunk的css */
    new ExtractTextPlugin({
	filename: '/css/[name].[hash:6].css',
	allChunks: true
    })
);

// pluginsConfig.push(
//     new PurifyCssPlugin({
// 	paths: glob.sync([
// 	    path.join(dirVars.pagesDir, '/**/*.html')
// 	]),
// 	/* 查看压缩信息 */
// 	purifyOptions: {
//             info: true,
//             minify: false
// 	}
//     })
// );

pluginsConfig.push(new webpack.DefinePlugin({
    IS_PRODUCTION: true
}));

pluginsConfig.push(
    new webpack.optimize.UglifyJsPlugin()
);

module.exports = pluginsConfig;
