var dirVars = require('../base/dir-vars.config.js');

const moduleConfig = require('../inherit/module.config.js');

moduleConfig.rules.push({
    test: /\.css$/,
    use: [
	{
	    loader: 'style-loader'
	},
	{
	    loader: 'css-loader',
	    options: {
		sourceMap: true
	    }
	}
    ]
});

module.exports = moduleConfig;
