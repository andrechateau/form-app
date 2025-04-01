// import { FastifyInstance } from 'fastify'

// import { Form } from '@prisma/client'

// import prisma from '../db/db_client'
// import { serializer } from './middleware/pre_serializer'
// import { IEntityId } from './schemas/common'
// import { ApiError } from '../errors'
// import { PackageFieldTest } from 'forms'

// async function formRoutes(app: FastifyInstance) {
//   app.setReplySerializer(serializer)

//   const log = app.log.child({ component: 'formRoutes' })

//   app.get<{
//     Params: IEntityId
//     Reply: Form
//   }>('/:id', {
//     async handler(req, reply) {
//       const { params } = req
//       const { id } = params
//       log.debug('get form by id')
//       try {
//         const form = await prisma.form.findUniqueOrThrow({ where: { id } })
//         reply.send(form)
//       } catch (err: any) {
//         log.error({ err }, err.message)
//         throw new ApiError('failed to fetch form', 400)
//       }
//     },
//   })

//   app.get<{
//     Params: IEntityId
//     Reply: Form
//   }>('/', {
//     async handler(req, reply) {
//       const test: PackageFieldTest = { 
//         test: 'test',
//       };

      
//       reply.send({
//         id:  '1',	
//         name: 'hello world',
//         fields: [],
//       });
//       // const { params } = req
//       // const { id } = params
//       // log.debug('get form by id')
//       // try {
//       //   const form = await prisma.form.findUniqueOrThrow({ where: { id } })
//       //   reply.send(form)
//       // } catch (err: any) {
//       //   log.error({ err }, err.message)
//       //   throw new ApiError('failed to fetch form', 400)
//       // }
//     },
//   })
// }

// export default formRoutes
