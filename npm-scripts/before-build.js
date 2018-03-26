var fs = require('fs');
var rimraf = require('rimraf');
var dirVars = require('../webpack-config/base/dir-vars.config.js');

/* 可能生成的目录不在同一文件夹下， so分开清除  */
// buildDir = './webapp'
// ./webapp/fonts
rimraf(dirVars.buildDir + '/fonts' , fs, function cb() {
  console.log('Fonts was cleaned');
});

// ./webapp/imgs
rimraf(dirVars.buildDir + '/imgs' , fs, function cb() {
  console.log('Imgs was cleaned');
});

// privatebuilddir = ./webapp/WEB-INF
// ./js
rimraf(dirVars.buildDir + '/js' , fs, function cb() {
  console.log('Js was cleaned');
});

// ./css
rimraf(dirVars.buildDir + '/CSS' , fs, function cb() {
  console.log('CSS was cleaned');
});

// ./pages
rimraf(dirVars.privateBuildDir + '/pages' , fs, function cb() {
  console.log('Pages was cleaned');
});


