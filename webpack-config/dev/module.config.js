var dirVars = require('../base/dir-vars.config.js');

const moduleConfig = require('../inherit/module.config.js');

moduleConfig.rules.push({
    test: /\.css$/,
    use: [
	'style-loader',
	'css-loader'
    ]
});

module.exports = moduleConfig;
