const Router = require('koa-router');
let home = new Router();

// 子路由1
home.get('/', async ctx => {
  let html = `Home`;
  ctx.body = html;
});

module.exports = home;
