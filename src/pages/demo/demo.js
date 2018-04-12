
require('./demo.css');


console.log('This is demo...');

$('#text').text('hahahah');

let func = () => {};
const NUM = 45;
let arr = [1, 2, 4];
let arrB = arr.map(item => item * 2);

// 测试 Babel Polyfill 或 Babel Runtime Transform
arr.includes(8);
console.log('new Set(arrB)', new Set(arrB));


