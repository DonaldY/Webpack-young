var dirVars = require('./base/dir-vars.config.js');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');

module.exports = {
    rules: [
	{
            test: /\.css$/,
	    use: ExtractTextPlugin.extract("css-loader", "style-loader")
	},

	{
	    test: /\.(png|jpg|jpeg|gif|webp)$/,
	    use: [
		{
		    loader: 'url-loader',
		    options: {
			name: '[name].[ext]',
			limit: 8192,
			publicPath: '',
			outputPath: 'build/',
			useRelativePath: true
		    }
		},
		{
		    loader: 'img-loader',
		    options: {
			pngquant: {
			    quality: 80
			}
		    }
		}
	
	    ]
	}
    ]
    
};
