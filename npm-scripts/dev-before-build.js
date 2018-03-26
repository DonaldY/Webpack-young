var fs = require('fs');
var rimraf = require('rimraf');
var dirVars = require('../webpack-config/base/dir-vars.config.js');

rimraf(dirVars.devBuildDir, fs, function cb() {
  console.log('build was cleaned');
});

// 根据需求，针对某个个别子目录进行删除
// rimraf(dirVars.buildDir + '/js', fs, function cb() {
//    console.log('js was cleaned');
//});
