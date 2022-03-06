import expressJwt from 'express-jwt'
import util from 'util'
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

export { jwtMiddleware }

function jwtMiddleware(req:any, res:any) {
  const middleware = expressJwt({
    secret: serverRuntimeConfig.secret,
    algorithms: ['HS256'],
  }).unless({
    path: [
      // public routes that don't require authentication
      '/api/auth/login',
    ],
  })

  return util.promisify(middleware)(req, res)
}
