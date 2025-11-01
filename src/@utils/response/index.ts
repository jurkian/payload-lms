import { NextResponse } from 'next/server'

export const sendResponse = <T>(data: T, status = 200) => {
   return NextResponse.json<T>(data, {
      status,
   })
}
