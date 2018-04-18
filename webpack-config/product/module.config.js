var dirVars = require('../base/dir-vars.config.js');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');

const moduleConfig = require('../inherit/module.config.js');

moduleConfig.rules.push({
    test: /\.css$/,

    use: ExtractTextPlugin.extract({
        use:[
            {
                loader: 'css-loader',
                options:{
                    minimize: true //css—πÀı
                }
            }
        ],
	fallback: "style-loader"
    })
});


module.exports = moduleConfig;
