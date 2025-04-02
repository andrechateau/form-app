import { FastifyInstance } from 'fastify'

import { serializer } from './middleware/pre_serializer'
import { ApiError } from '../errors'
import { RecordPayload } from 'forms'
import { save } from '../services/record.service'

async function recordRoutes(app: FastifyInstance) {
  app.setReplySerializer(serializer)

  const log = app.log.child({ component: 'recordRoutes' })

  app.post<{
    Body: RecordPayload
    Reply: RecordPayload
  }>('/save', {
    async handler(req, reply) {
      try {
        const recordAndData = await save({
          record: req.body,
          data: req.body.data,
        })

        reply.send({
          ...recordAndData.record,
          data: recordAndData.data,
        })
      } catch (err: any) {
        log.error({ err }, err.message)
        throw new ApiError('failed to fetch form', 400)
      }
    },
  })

  // app.get<{
  //   Reply: PairIdLabel[]
  // }>('/list', {
  //   async handler(_, reply) {
  //     try {
  //       reply.send(await list())
  //     } catch (err: any) {
  //       log.error({ err }, err.message)
  //       throw new ApiError('failed to fetch form', 400)
  //     }
  //   },
  // })

  // app.get<{
  //   Params: IEntityId
  //   Reply: FormPayload
  // }>('/:id', {
  //   async handler(req, reply) {
  //     const { params } = req
  //     const { id } = params

  //     try {
  //       reply.send(convertFormEntityToPayload(await get(id)))
  //     } catch (err: any) {
  //       log.error({ err }, err.message)
  //       throw new ApiError('failed to fetch form', 400)
  //     }
  //   },
  // })
}

export default recordRoutes
