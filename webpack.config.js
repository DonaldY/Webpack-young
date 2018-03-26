require('./npm-scripts/before-build.js');

var config = {
    entry: require('./webpack-config/entry.config.js'),
    
    output: require('./webpack-config/product/output.config.js'),
    
    module: require('./webpack-config/product/module.config.js'),

    resolve: require('./webpack-config/resolve.config.js'),
    
    plugins: require('./webpack-config/product/plugins.config.js'),

    externals: require('./webpack-config/externals.config.js')
};

module.exports = config;
