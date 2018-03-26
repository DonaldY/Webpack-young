require('./npm-scripts/dev-before-build.js');

var config = {
    entry: require('./webpack-config/entry.config.js'),
    
    output: require('./webpack-config/dev/output.config.js'),
    
    module: require('./webpack-config/dev/module.config.js'),

    resolve: require('./webpack-config/resolve.config.js'),
    
    plugins: require('./webpack-config/dev/plugins.config.js'),

    externals: require('./webpack-config/externals.config.js'),

    devServer: require('./webpack-config/dev/devServer.config.js')
};

module.exports = config;
