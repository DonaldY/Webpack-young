var dirVars = require('./base/dir-vars.config.js');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');

module.exports = {
    rules: [
	{
            test: /\.css$/,
	    use: ExtractTextPlugin.extract("css-loader", "style-loader")
	},

	{
	    test: /\.(png|jpg|jpeg|gif)$/,
	    use: [
		{
		    loader: 'file-loader',
		    options: {
			publicPath: '',
			outputPath: 'build/',
			useRelativePath: true
		    }
		}
	    ]
	}
    ]
    
};
