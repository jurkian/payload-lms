import { NextRequest } from 'next/server'
import { PayloadRequest } from 'payload'

export const getUserAgent = (req: PayloadRequest | NextRequest): string =>
  req.headers.get('user-agent') || 'unknown'
