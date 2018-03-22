var path = require('path');
var dirVars = require('./base/dir-vars.config.js');
var pageArr = require('./base/page-entries.config.js');
var configEntry = {};

function isJsFile(str)  {  
   var objRegExp = /\.js/;
   return objRegExp.test(str);  
}  

/* enty以js为入口，so，过滤js */
pageArr.forEach((page) => {
    if (isJsFile(page)) {
	page = page.substring(0, page.lastIndexOf('.'));
	configEntry[page] = path.resolve(dirVars.pagesDir, page);
    }
});

module.exports = configEntry;
