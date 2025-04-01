import { FastifyInstance } from 'fastify'

import { Form } from '@prisma/client'

import prisma from '../db/db_client'
import { serializer } from './middleware/pre_serializer'
import { IEntityId } from './schemas/common'
import { ApiError } from '../errors'
import { FormPayload } from 'forms'
import { convertFormEntityToPayload, convertFormPayloadToEntity } from 'forms'
import { omit } from 'lodash'

async function formRoutes(app: FastifyInstance) {
  app.setReplySerializer(serializer)

  const log = app.log.child({ component: 'formRoutes' })

  const save = async (entity: Form): Promise<Form> =>
    await prisma.form.upsert({
      where: { id: entity.id ?? '' },
      update: { ...omit(entity, ['id']) },
      create: { ...omit(entity, ['id']) },
    })

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

  // app.get<{
  //   Params: IEntityId
  //   Reply: Form
  // }>('/list', {
  //   async handler(_, reply) {
  //     log.debug('get form by id')
  //     try {
  //       const form = await prisma.form.findUniqueOrThrow({ where: { id } })
  //       reply.send(form)
  //     } catch (err: any) {
  //       log.error({ err }, err.message)
  //       throw new ApiError('failed to fetch form', 400)
  //     }
  //   },
  // })

  app.get<{
    Params: IEntityId
    Reply: Form
  }>('/:id', {
    async handler(req, reply) {
      const { params } = req
      const { id } = params
      log.debug('get form by id')
      try {
        const form = await prisma.form.findUniqueOrThrow({ where: { id } })
        reply.send(form)
      } catch (err: any) {
        log.error({ err }, err.message)
        throw new ApiError('failed to fetch form', 400)
      }
    },
  })

  app.get<{
    Params: IEntityId
    Reply: Form
  }>('/', {
    async handler(req, reply) {
      reply.send({
        id: '1',
        name: 'hello world',
        fields: [],
      })
    },
  })
}

export default formRoutes
