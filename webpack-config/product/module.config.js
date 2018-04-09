var dirVars = require('../base/dir-vars.config.js');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');

const moduleConfig = require('../inherit/module.config.js');

moduleConfig.rules.push({
    test: /\.css$/,

    use: ExtractTextPlugin.extract([
	{
	    loader: 'css-loader'
	}
    ])
});


module.exports = moduleConfig;
