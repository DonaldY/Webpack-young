var dirVars = require('../base/dir-vars.config.js');
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
			publicPath: '../../imgs/',
			outputPath: 'imgs/',
			useRelativePath: true
		    }
		},
		{
		    // Ñ¹Ëõ
		    loader: 'img-loader',
		    options: {
			pngquant: {
			    quality: 80
			}
		    }
		}
	
	    ]
	},

	{
	    // iconfont
	    test:/\.(eot|woff2|woff|ttf|svg)$/,
	    use: [
		{
		    loader: 'url-loader',
		    options: {
			name: '[name].[ext]',
			limit: 8192,
			publicPath: '../../fonts/',
			outputPath: 'fonts/',
			useRelativePath: true
		    }
		}
	    ]
	}
    ]
    
};
