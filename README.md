### Webpack-young
---
�֮��Ϊ���ڴ�ͳ��˿����½�һ��ǰ��˷��루Java��ˣ���
<br/>
### ��Ŀ����
---
����Ŀ��һ��Webpack��ҳ��Ӧ�ý��ּܣ���ǰʹ��Webpack�汾3.8.1��
- 

<br/>
### ʹ��˵��
---
- ���ؽ��ּ�
```
git clone 
```

- ���ر���Ŀ�����İ�
```
npm install
```

- ���������£����� dev server���˿ڣ�8081��
```
npm run dev  # ������
npm run start # ��������
```

- ���������£���������Ŀ¼���������磺��˿�����Դ·�� `${ctx_path}`��
```
npm run build
```
<br/>
### demoѧϰ
---
��`src/pages/demo/`�и�Сdemo���漰
- cssͼƬ��htmlͼƬ
- ȫ��jq
- ���������������������ж�
- ����html�ַ���
- babel��
- ������

<br/>
### Ŀ¼�ṹ˵��
---
```
����build # ��������ɵ����д���
����node_modules # ����npm��������а���������
����webpack-config # ��ŷֲ���webpack�����ļ�
��   ����base # ��Ҫ�Ǵ��һЩ����
����webpack.config.js # ����������webpack�����ļ�
����webpack.dev.config.js # ����������webpack�����ļ�
����webpack.start.config.js # ���������ȼ��ص�webpack�����ļ�
����src # ��ǰ��Ŀ��Դ��
    ����pages # ����ҳ����еĲ��֣�������ļ���ֻ�и�ҳ��ʹ�õ���css��ģ���ļ���
    ��  ����alert # ҵ��ģ��
    ��  ��  ����index # �����ļ���
    ��  ����index # ҵ��ģ��
    ��  ��  ����login # �����ļ���
    ��  ��      ����login.html # ����ҳ��
    ��  ����user # ҵ��ģ��
    ��  ��   ����edit-password # ����ҳ��
    ��  ��   ����modify-info # ����ҳ��
    ��  ����error404.html # ����ҳ��	
    ����public-resource # ����ҳ��ʹ�õ��Ĺ�����Դ
        ����components # ����������Ǵ�HTML��Ҳ���԰���js/css/image�ȣ����Լ���Ҫ
        ��  ����footer # ҳβ
        ��  ����header # ҳͷ
        ��  ����side-menu # �����
        ��  ����top-nav # �����˵�
        ����iconfont # iconfont�������ļ�
        ����imgs # ���õ�ͼƬ��Դ
```

<br/>
### ����
---
> ���⣨��Ӱ����ּܣ���
> 1. `DeprecationWarning: Chunk.modules is deprecated. Use Chunk.getNumberOfModules/mapModules/forEachModule/containsModule instead.`
> �ڵ���purify-css�Ⱥ���ֵ�warming����δ���
> ������ϣ�https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/529
> https://www.jianshu.com/p/f30401c0b413

<br/>
### ��л
---
1. ����Ŀ��[��Ŀ](https://github.com/Array-Huang/webpack-seed) ѧϰ�Ľ�����3.8.1��ʵ�֡�
2. ��лĬĬ���׵��ˣ�
