import fastify from 'fastify'

import formRoutes from './routes/form'
import errorHandler from './errors'

function build(opts = {}) {
  const app = fastify(opts)

  app.register(formRoutes, { prefix: '/form' })

  app.setErrorHandler(errorHandler)

  return app
}
export default build
