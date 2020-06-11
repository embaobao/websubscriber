/** 应用入口
 *
 */
// 三方引用
const Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const staticRouter = require('koa-static');
const views = require('koa-views');
// 业务引用
const middleware = require('./middleware');
const router = require('./route');

const app = new Koa();
// 使用ctx.body解析中间件
app.use(bodyParser());
app.use(middleware.logger());
// 加载模板引擎
app.use(
  views(path.join(__dirname, './view'), {
    extension: 'ejs'
  })
);
// const isProduction =  process.env.NODE_ENV === 'dev'; //isProduction ? '../views/build/' : '../views/';
// 静态资源目录对于相对入口文件index.js的路径
const staticPath = '../views/build/';
app.use(staticRouter(path.join(__dirname, staticPath)));
// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.use(async ctx => {
  ctx.body = 'hello koa2';
});

app.listen(9000);

console.log('Service Setup at http://0.0.0.0:9000/');
