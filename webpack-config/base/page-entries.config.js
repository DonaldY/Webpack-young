var glob = require('glob');
var dirVars = require('./dir-vars.config.js');
var options = {
  cwd: dirVars.pagesDir, // ��pagesĿ¼����
  sync: true // ���ﲻ���첽��ֻ��ͬ��
};
var globInstance = new glob.Glob('!(_)*/!(_)*', options); // ���ǵ����ҳ�湲��HTML����Դ�������������'_'��ͷ��Ŀ¼
module.exports = globInstance.found; // һ�����飬����['index/index', 'index/login', 'alert/index']
