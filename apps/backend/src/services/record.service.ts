import { SourceData, SourceRecord, Form } from '@prisma/client'
import prisma from '../db/db_client'
import { omit } from 'lodash'

export interface RecordAndData {
  record: SourceRecord
  data: SourceData[]
}

export const save = async (rd: RecordAndData): Promise<RecordAndData> => {
  const recordSaved = await prisma.sourceRecord.upsert({
    where: { id: rd.record.id ?? '00000000-0000-0000-0000-000000000000' },
    update: { ...omit(rd.record, ['id']) },
    create: { ...omit(rd.record, ['id']) },
  })

  await prisma.sourceData.createMany({
    data: rd.data.map(d => ({
      ...omit(d, ['id']),
      sourceRecordId: recordSaved.id,
    })),
  })

  return { record: recordSaved, data: await listData(recordSaved) }
}

export const listData = async (record: SourceRecord): Promise<SourceData[]> =>
  await prisma.sourceData.findMany({
    where: {
      sourceRecordId: record.id,
    },
  })

export const listRecord = async (form: Form): Promise<SourceRecord[]> =>
  await prisma.sourceRecord.findMany({
    where: {
      formId: form.id,
    },
  })

export const getRecord = async (id: string): Promise<SourceRecord> => {
  return await prisma.sourceRecord.findFirstOrThrow({ where: { id } })
}
