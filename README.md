

> 配合后端开发，页面生产在后端项目中的子目录，有开发和生产环境生成的目录不同
> 由于后端开发资源路径 `${ctx_path}` 与 开发环境不同，为了更好前端开发。
> 


> 问题：
> 1. `DeprecationWarning: Chunk.modules is deprecated. Use Chunk.getNumberOfModules/mapModules/forEachModule/containsModule instead.`
> 在导入purify-css等后出现的warming，还未解决
> 相关资料：https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/529
> https://www.jianshu.com/p/f30401c0b413
