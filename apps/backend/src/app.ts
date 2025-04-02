import fastify from 'fastify'

import formRoutes from './routes/form'
import errorHandler from './errors'
import recordRoutes from './routes/records'

function build(opts = {}) {
  const app = fastify(opts)

  app.register(formRoutes, { prefix: '/form' })
  app.register(recordRoutes, { prefix: '/record' })

  app.setErrorHandler(errorHandler)

  return app
}
export default build
