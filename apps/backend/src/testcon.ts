import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testConnection() {
  console.log('Testing database connection...', process.env.DATABASE_URL)
  try {
    const result = await prisma.form.findMany()
    console.log(result)
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()
