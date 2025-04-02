import { Form } from '@prisma/client'
import prisma from '../db/db_client'
import { PairIdLabel } from 'forms'
import { omit } from 'lodash'

export const save = async (entity: Form): Promise<Form> =>
  await prisma.form.upsert({
    where: { id: entity.id ?? '' },
    update: { ...omit(entity, ['id']) },
    create: { ...omit(entity, ['id']) },
  })

export const list = async (): Promise<PairIdLabel[]> =>
  (
    await prisma.form.findMany({
      select: {
        id: true,
        name: true,
      },
    })
  ).map(
    (item): PairIdLabel => ({
      id: item.id,
      label: item.name,
    })
  )

export const get = async (id: string): Promise<Form> =>
  await prisma.form.findFirstOrThrow({ where: { id } })
