var path = require('path');

module.exports = {
    publicPath: '../../',
    contentBase: './build/',
    host: 'localhost',
    port: 8081, // Ĭ��8080
    inline: true, // ���Լ��js�仯
    hot: true, // ������
    compress: true,
    watchContentBase: false
};
