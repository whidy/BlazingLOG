# 极速的博客程序

基于Next.js实现的SSR博客系统。

## 特性

* Next.js
* SSR
* Docker集成
* PostgreSQL数据存储
* GraphQL查询

## 如何运行

### 后端服务

> 该服务运行在在docker环境下

```
bash run.sh
```

如果出错检查docker配置，本地查看运行状态`docker container ls -a`。

浏览器可打开<http://localhost:5000/>进行数据库查询及相关操作，后台采用[Hasura](https://hasura.io/)图形化操作界面的Web服务。

### 前端页面

启动开发模式

```
yarn dev
```

发布生产

```
yarn build
yarn start
```

访问<http://localhost:4200>即可。

> 如何创建数据库，访问数据及部署到服务器不在该项目范围。
