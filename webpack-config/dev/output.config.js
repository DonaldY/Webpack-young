var dirVars = require('../base/dir-vars.config.js');

module.exports = {
    path: dirVars.devBuildDir,
    publicPath: '../../../',
    filename: 'js/[name].js',    // [name]��ʾentryÿһ���е�key����������ָ�����ɺ��ļ�������
    chunkFilename: '[id].[chunkhash].bundle.js'
};
