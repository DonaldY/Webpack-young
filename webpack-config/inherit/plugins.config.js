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
	name: 'commons/common',      // ��Ҫע����ǣ�chunk��name������ͬ������
	filename: 'js/[name].js',
	minChunks: 4
    }),
    
];

/* 
   Ϊ�˸������ö�ҳ��

   һ��ģ�����ж��ҳ��

   ��ĿԴ�룺
   pages # src/pages/
     ����alert # ģ��-1
     |  ����alert
     ��      ����alert.html
     ��      ����alert.css
     ��      ����alert.js
     ����index # ģ��-2
        ����index # ��ģ��-1
        ����login # ��ģ��-2

    �����
    WEB-INFO 
      ����pages 
         ����alert 
         ��  ����index.html # ����ҳ��
         ����index 
             ����index.html # ����ҳ��
             ����login.html # ����ҳ��
 */

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
	    chunks: ['commons/common', page], // �����ļ����ȵ���
	    xhtml: true
	});
	configPlugins.push(htmlPlugin);
    }
});

module.exports = configPlugins;
