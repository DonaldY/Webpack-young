# Webpack-young

搭建之初为了在传统后端开发下进一步前后端分离（Java后端）



## 项目介绍

本项目是一个Webpack多页面应用脚手架（当前使用Webpack版本3.8.1）



## 使用说明

- 下载脚手架
```
git clone 
```

- 下载本项目依赖的包
```
npm install
```

- 开发环境下，开启 dev server（端口：8081）
```
npm run dev  # 编译打包
npm run start # 启动服务
```

- 生产环境下，打包到另个目录（可配置如：后端开发资源路径 `${ctx_path}`）
```
npm run build
```



## demo学习

在`src/pages/demo/`有个小demo，涉及
- css图片和html图片
- 全局jq
- 开发环境和生产环境下判断
- 插入html字符串
- babel等
- 。。。




## 目录结构说明

```
├─build # 编译后生成的所有代码
├─node_modules # 利用npm管理的所有包及其依赖
├─webpack-config # 存放分拆后的webpack配置文件
│   └─base # 主要是存放一些变量
├─webpack.config.js # 生产环境的webpack配置文件
├─webpack.dev.config.js # 开发环境的webpack配置文件
├─webpack.start.config.js # 开发环境热加载的webpack配置文件
└─src # 当前项目的源码
    ├─pages # 各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
    │  ├─alert # 业务模块
    │  │  └─index # 具体文件夹
    │  ├─index # 业务模块
    │  │  └─login # 具体文件夹
    │  │      └─login.html # 具体页面
    │  ├─user # 业务模块
    │  │   ├─edit-password # 具体页面
    │  │   └─modify-info # 具体页面
    │  └─error404.html # 错误页面	
    └─public-resource # 各个页面使用到的公共资源
        ├─components # 组件，可以是纯HTML，也可以包含js/css/image等，看自己需要
        │  ├─footer # 页尾
        │  ├─header # 页头
        │  ├─side-menu # 侧边栏
        │  └─top-nav # 顶部菜单
        ├─iconfont # iconfont的字体文件
        └─imgs # 公用的图片资源
```




## 问题

> 问题（不影响脚手架）：
> 1. `DeprecationWarning: Chunk.modules is deprecated. Use Chunk.getNumberOfModules/mapModules/forEachModule/containsModule instead.`
> 在导入purify-css等后出现的warming，还未解决
> 相关资料：https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/529
> https://www.jianshu.com/p/f30401c0b413




## 感谢
1. 本项目在[项目](https://github.com/Array-Huang/webpack-seed) 学习改进并在3.8.1下实现。
2. 感谢默默贡献的人！
