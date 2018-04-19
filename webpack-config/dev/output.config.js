var dirVars = require('../base/dir-vars.config.js');

module.exports = {
    path: dirVars.devBuildDir,
    publicPath: '../../../',
    // 不能加hash，不然HotModuleReplacementPlugin启动不了。
    filename: 'js/[name].js',    // [name]表示entry每一项中的key，用以批量指定生成后文件的名称
    chunkFilename: '[id].[chunkhash].bundle.js'
};
