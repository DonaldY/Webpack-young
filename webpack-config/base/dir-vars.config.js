var path = require('path');
var moduleExports = {};

// Դ�ļ�Ŀ¼
moduleExports.staticRootDir = path.resolve(__dirname, '../../'); // ��Ŀ��Ŀ¼

moduleExports.srcRootDir = path.resolve(moduleExports.staticRootDir, './src'); // ��Ŀҵ������Ŀ¼

moduleExports.pagesDir = path.resolve(moduleExports.srcRootDir, './pages'); // ��Ÿ���ҳ����еĲ��֣�������ļ���ֻ�и�ҳ��ʹ�õ���css��ģ���ļ���

moduleExports.publicDir = path.resolve(moduleExports.srcRootDir, './public-resource'); // ��Ÿ���ҳ��ʹ�õ��Ĺ�����Դ

moduleExports.componentsDir = path.resolve(moduleExports.publicDir, './components'); // �������������Ǵ�HTML��Ҳ���԰���js/css/image�ȣ����Լ���Ҫ

// �����ļ�Ŀ¼
moduleExports.devBuildDir = path.resolve(moduleExports.staticRootDir, './build'); // �ǿ��������� ��ű�������ɵ����д��롢��Դ��ͼƬ������ȣ���Ȼֻ�Ǽ򵥵Ĵ�ԴĿ¼Ǩ�ƹ�����

// �����ļ�Ŀ¼
moduleExports.buildDir = path.resolve(moduleExports.staticRootDir, '../src/main/webapp'); // ��ű�������ɵ����д��롢��Դ��ͼƬ������ȣ���Ȼֻ�Ǽ򵥵Ĵ�ԴĿ¼Ǩ�ƹ�����

// ��������ļ�Ŀ¼
moduleExports.privateBuildDir = path.resolve(moduleExports.buildDir, './WEB-INF');

module.exports = moduleExports;
