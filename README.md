### 简介
`vue-ele-admin` 是一个后台集成解决方案，它基于vue2和Element-ui。它使用了最新的前端技术栈，内置了动态路由，权限验证等很多功能特性，相信不管你的需求是什么，本项目都能帮助到大家。


### 前序准备
本地环境需要安装[node](http://nodejs.org/) 。


### 技术
 - [ES2015+](http://es6.ruanyifeng.com/)
 - [vue2](https://cn.vuejs.org/v2/guide/)
 - [vuex](https://vuex.vuejs.org/zh-cn/)
 - [vue-router](https://router.vuejs.org/zh-cn/)
 - [element-ui](http://element.eleme.io/#/zh-CN)
 - [axios](https://www.jianshu.com/p/7a9fbcbb1114)
 - [less](http://lesscss.cn/)
 
 
### 开发
```
# 克隆项目
git clone https://github.com/anody/vue-ele-admin.git
# 建议用cnpm
npm install --registry=https://registry.npm.taobao.org
# 安装依赖
cnpm install
# 启动服务
npm start
```
 浏览器访问 http://localhost:8080


### 兼容性
该项目不支持低版本浏览器(如ie)，有需求请自行添加polyfill [详情](https://github.com/PanJiaChen/vue-element-admin/wiki#babel-polyfill)


### 发布
```bash
# 构建测试环境
npm run build:sit

# 构建生成环境
npm run build:prod
```

### 目录结构
```
├── build                      // 构建相关
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题、字体、全局样式等静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── filters                // 全局 filter
│   ├── icons                  // 项目所有 svg icons
│   ├── lang                   // 国际化 language
│   ├── router                 // 路由
│   ├── store                  // 全局 store管理
│   ├── utils                  // 全局公用方法
│   ├── views                  // 网站页面模块
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化等
│   └── permission.js          // 权限管理
├── static                     // 第三方不打包资源
│   └── Tinymce                // 富文本
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
└── package.json               // package.json
```


[在线demo](http://vue2.dach328.com/)

更多信息请参考博客 [使用文档](http://dach328.com/?cate=10)

Copyright (c) 2018-present Ladyson
