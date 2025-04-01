import { StringOptions, Type } from '@sinclair/typebox'

export const Uuid = (options: Omit<StringOptions, 'format'> = {}) =>
  Type.String({
    format: 'uuid',
    ...options,
  })
