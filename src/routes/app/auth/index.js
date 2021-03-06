const Router = require('koa-router')
const koaBody = require('koa-body')

const auth = require('../../../controllers/app/auth')

const router = new Router()

const authAlready = async (ctx, next) => { // Auth already exist
  if (ctx.session && ctx.session.userId) {
    console.log(`session userId : ${ctx.session.userId}`)
    return ctx.redirect('/')
  }

  await next()
}

router.get('/signin', authAlready, auth.signInGetHandler)
router.post('/signin', koaBody(), auth.signInPostHandler)

router.get('/signup', authAlready, auth.signUpGetHandler)
router.post('/signup', koaBody(), auth.signUpPostHandler)

module.exports = router.routes()
