import { randomUUID } from 'crypto'

export const getSeedData = async () => {
  const formData = [
    {
      id: randomUUID(),
      name: 'Vial Form Example',
      fields: {
        'field-1': {
          type: 'text',
          question: 'First Name?',
          required: true,
        },
        'field-2': {
          type: 'text',
          question: 'Last Name?',
          required: true,
        },
        'field-3': {
          type: 'text',
          question: 'Email?',
          required: true,
        },
        'field-4': {
          type: 'datetime',
          question: 'Date of Birth?',
          required: true,
        },
      },
    },
  ]

  const sourceRecordData = [
    {
      id: randomUUID(),
      formId: formData[0].id,
    },
  ]

  const sourceData = [
    {
      id: randomUUID(),
      sourceRecordId: sourceRecordData[0].id,
      question: 'First Name?',
      answer: 'John',
    },
    {
      id: randomUUID(),
      sourceRecordId: sourceRecordData[0].id,
      question: 'Last Name?',
      answer: 'Doe',
    },
    {
      id: randomUUID(),
      sourceRecordId: sourceRecordData[0].id,
      question: 'Email?',
      answer: 'john.doe@test.com',
    },
    {
      id: randomUUID(),
      sourceRecordId: sourceRecordData[0].id,
      question: 'Date of Birth?',
      answer: '2021-01-01T00:00:00.000Z',
    },
  ]

  return {
    formData,
    sourceRecordData,
    sourceData,
  }
}
