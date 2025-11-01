import config from '@/payload.config'
import { getPayload, PaginatedDocs, Payload } from 'payload'

export let payloadObject: Payload

export const getLocalPayload = async () => getPayload({ config })

export const findOne = async <T>(payloadPromise: Promise<PaginatedDocs<T>>) => {
  const query = await payloadPromise
  return query.docs[0]
}

export const findMany = async <T>(payloadPromise: Promise<PaginatedDocs<T>>) => {
  const query = await payloadPromise
  return query.docs
}
