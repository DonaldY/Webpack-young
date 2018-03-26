var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var dirVars = require('../base/dir-vars.config.js');
var pageArr = require('../base/page-entries.config.js');

var configPlugins = [

    /* ȫ��shimming */
    new webpack.ProvidePlugin({
	$: 'jquery',
	jQuery: 'jquery',
	'window.jQuery': 'jquery',
	'window.$': 'jquery'
	
    }),
    /* ��ȡ������ͨ�õĲ��� */
    new webpack.optimize.CommonsChunkPlugin({
	name: 'js/commons/common',      // ��Ҫע����ǣ�chunk��name������ͬ������
	filename: '[name].js',
	minChunks: 4
    }),
 
    /* ��ȡ��chunk��css */
    new ExtractTextPlugin('css/[name].css'),
    
];


function isHtmlFile(str)  {  
   var objRegExp = /\.html/;
   return objRegExp.test(str);  
} 

pageArr.forEach((page) => {
    if (isHtmlFile(page)) {
	page = page.substring(0, page.lastIndexOf('.'));
	const htmlPlugin = new HtmlWebpackPlugin({
	    filename: `/WEB-INF/pages/${page}.html`,
	    template: path.resolve(dirVars.pagesDir, `./${page}.html`),
	    chunks: ['js/commons/common', page], // �����ļ����ȵ���
	    xhtml: true
	});
	configPlugins.push(htmlPlugin);
    }
});

module.exports = configPlugins;
