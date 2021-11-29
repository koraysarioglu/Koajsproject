const Koa = require("koa");
const koaRouter = require("koa-router"); // Yönlendirme modülümüz.
var logger = require('koa-logger')

const app = new Koa();
const router = new koaRouter();



router.get("home", "/", (context) => {
  context.body = "Welcome to my Koa.js Server";
});

router.get("about", "/about", (context) => {
    context.body = "Welcome to my about page";
  });

  router.get("contact", "/contact", (context) => {
    context.body = "Welcome to my contact page";
  });

  router.get("blank", "*", (context) => {
    context.body = "Welcome to my contact page";
  });

app.use(router.routes()).use(router.allowedMethods());

const port = 3000;
app.listen(port, function () {
    console.log(`Our server is working on ${port}`)
})
