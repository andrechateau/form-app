import { PrismaClient } from '@prisma/client'

import { getSeedData } from './data'

const client = new PrismaClient()

const deleteAllRecords = async () => {
  // Deletion order is important due to non-null relation constraints.
  await client.$transaction([
    client.sourceData.deleteMany(),
    client.sourceRecord.deleteMany(),
    client.form.deleteMany(),
  ])

  console.log('All records deleted')
}

const createAllRecords = async () => {
  // Deletion order is important due to non-null relation constraints.
  const data = await getSeedData()

  await client.$transaction([
    client.form.createMany({ data: data.formData }),
    client.sourceRecord.createMany({ data: data.sourceRecordData }),
    client.sourceData.createMany({ data: data.sourceData }),
  ])

  console.log('All records created')
}

async function seed() {
  await deleteAllRecords()
  await createAllRecords()
}

seed()
  .then(async () => {
    await client.$disconnect()
    console.log('database disconnected')
    process.exit(0)
  })
  .catch(async e => {
    console.error(e)
    await client.$disconnect()
    process.exit(1)
  })
