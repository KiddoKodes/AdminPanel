import { errorHandler } from './errorHandler'
import { jwtMiddleware } from './jwtMiddleware'

//this is a wrapper around next apis to add middlewares
const apiHandler = (handler: any) => {
  return async (req: any, res: any) => {
    try {
      // global middleware
      await jwtMiddleware(req, res)

      // route handler
      await handler(req, res)
    } catch (err) {
      // global error handler
      errorHandler(err, res)
    }
  }
}
export { apiHandler }
