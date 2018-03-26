var fs = require('fs');
var rimraf = require('rimraf');
var dirVars = require('../webpack-config/base/dir-vars.config.js');

/* 配合后端开发 生成并不在同一个不目录下 */
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


