﻿var path = require('path');

module.exports = {
    publicPath: '/',
    contentBase: './build',
    host: 'localhost',
    port: 8081, // 默认8080
    inline: true, // 可以监控js变化
    hot: true, // 热启动
    compress: true,
    overlay: true // eslint 在页面上显示
};
