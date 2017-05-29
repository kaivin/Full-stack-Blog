# Full-stack-blog(不断更新笔记)
效果http://sunnerrrr.cn/index
(尚未完成数据检验和异步数据流)
搭建一个基于Koa2的多人blog
参考自https://github.com/nswbmw/N-blog
前端部分以create-react-app的脚手架搭起react+react-router v4+redux的全家桶
后端采用koa2+mongodb 

## 开发环境
开发环境(node要求 7.6以上)
Nodejs:7.6.0
koa:2.0
MongoDB:3.2.10

## 目录结构

## 如何运行

后端默认配置在config/default.js中
请确保本地Mongodb 端口27017(默认)可用
 
```
git clone https://github.com/Sunshine168/Full-stack-Blog.git
cd myblog/
npm install //or yarn install
npm build 
node scripts/publish ./server  //发布到server目录中
cd ..
cd server/
npm install //or yarn install
node index //默认3305端口
```

## 调试配置


### 前后端分离配置(默认不需要配置)

(需要整体运行一下项目产生一下cookies)
#### 前端修改
进入myblog目录进入config的env文件里修改

```
 'ORIGIN':'http://localhost:3005' 
//修改一下本地主机
```
#### 后端修改
进入server目录下

```
config/default.js//默认配置文件
```
修改cors,修改成前端运行的域名,默认指向3000端口(不需要跨域调试的时候请注释掉) 后面提供process.env区分跨域模式

```
NODE_ENV=development node index.js
```


## 总体任务

### 1改写项目框架由express->Koa2
### 2前端->工程化的react.js
TODO

* [x] 2.1多页面实践
* [x] 2.2redux实践
* [x] 2.3单页面实践
* [ ] 2.4服务器同构
* [ ] 2.5Immutable
* [ ] 2.6react动画机制


---

## express->koa2
**目前进度**

* [x] 工作目录设定
* [x] 依赖模块
* [x] 配置文件
* [x] 路由部分
* [x] 数据库访问
* [x] 处理react单页重定向

## koa2

待更


## react

完成react+redux+react-routerv4全家桶







