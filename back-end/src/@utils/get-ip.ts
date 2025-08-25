import { NextRequest } from 'next/server'
import { PayloadRequest } from 'payload'

export const getIp = (req: PayloadRequest | NextRequest): string =>
  req.headers.get('x-forwarded-for') || ''
