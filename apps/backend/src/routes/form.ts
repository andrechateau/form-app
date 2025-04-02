import { FastifyInstance } from 'fastify'

import { serializer } from './middleware/pre_serializer'
import { IEntityId } from './schemas/common'
import { ApiError } from '../errors'
import { FormPayload, PairIdLabel } from 'forms'
import { convertFormEntityToPayload, convertFormPayloadToEntity } from 'forms'
import { get, list, save } from '../services/form.service'

async function formRoutes(app: FastifyInstance) {
  app.setReplySerializer(serializer)

  const log = app.log.child({ component: 'formRoutes' })

  app.post<{
    Body: FormPayload
    Reply: FormPayload
  }>('/save', {
    async handler(req, reply) {
      try {
        reply.send(
          convertFormEntityToPayload(
            await save(convertFormPayloadToEntity(req.body))
          )
        )
      } catch (err: any) {
        log.error({ err }, err.message)
        throw new ApiError('failed to fetch form', 400)
      }
    },
  })

  app.get<{
    Reply: PairIdLabel[]
  }>('/list', {
    async handler(_, reply) {
      try {
        reply.send(await list())
      } catch (err: any) {
        log.error({ err }, err.message)
        throw new ApiError('failed to fetch form', 400)
      }
    },
  })

  app.get<{
    Params: IEntityId
    Reply: FormPayload
  }>('/:id', {
    async handler(req, reply) {
      const { params } = req
      const { id } = params

      try {
        reply.send(convertFormEntityToPayload(await get(id)))
      } catch (err: any) {
        log.error({ err }, err.message)
        throw new ApiError('failed to fetch form', 400)
      }
    },
  })
}

export default formRoutes
