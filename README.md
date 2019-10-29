# 小程序

> MRD：<https://shimo.im/folder/eTK4JluKxSQvaGI0>

## 写在前面

这是一个基于微信小程序typescript模版搭建的项目.

### 代码风格

+ typescript
+ eslint
+ stylelint
+ prettier

> todo: wxml提示不够友好,wxss不能在保存时自动格式化.

### .ts说明文件

官方包: <https://github.com/wechat-miniprogram/api-typings>  
本地包: ./typings (内容不全)

### 编译

+ .ts文件不能自动编译,需要在微信开发者工具内手动 command+B(因为需要执行预处理命令).
+ .ts文件只能编译成.js文件(.wxs没有办法用ts来写).

### 性能问题

+ 频繁调用 `setData` 函数，小程序每次调用 `setData` 都会更新视图,所以频繁调用会特别影响性能.
+ `wxs函数` 会在更新视图的时候全部执行一遍,所以频繁的 `setData` 会导致 `wxs函数` 大量的重复执行,十分影响性能.
