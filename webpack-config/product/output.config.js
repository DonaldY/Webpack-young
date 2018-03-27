var dirVars = require('../base/dir-vars.config.js');

module.exports = {
    path: dirVars.buildDir,
    publicPath: '${ctx_path}/',  // ��Ϻ������ `localhost:8080/XXXX/`
    filename: 'js/[name].js',    // [name]��ʾentryÿһ���е�key����������ָ�����ɺ��ļ�������
    chunkFilename: '[id].[chunkhash].bundle.js'
};
