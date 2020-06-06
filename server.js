const Koa = require('koa')
const Router = require('@koa/router')
const path = require('path')
const fs = require('fs')
const VueServerRenderer = require('vue-server-renderer')
const static = require('koa-static')

const app = new Koa()
const router = new Router()
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const template = fs.readFileSync('./dist/index.server.html', 'utf-8')

const render = VueServerRenderer.createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
})

router.get('*', async ctx => {
  try {
    ctx.body = await new Promise((reslove, reject) => {
      render.renderToString({url: ctx.url},(err, html) => {
        if(err) reject()
        reslove(html)
      })
    })
  } catch (error) {
    console.log('error',error)
  }
})

app.use(static(path.resolve(__dirname, 'dist')))
app.use(router.routes())

app.listen(3000)
