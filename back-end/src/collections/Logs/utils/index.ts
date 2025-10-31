import { PayloadRequest } from 'payload'
import dayjs from '@utils/dayjs'
import { getIp } from '@/@utils/get-ip'

export const saveLog = async (action: string, req: PayloadRequest) => {
   const obj = {
      action,
      date: dayjs().format(),
      ip: getIp(req),
      userAgent: req.headers.get('user-agent'),
      user: null,
   }

   const user = req.user?.id

   if (user) {
      obj.user = user
   }

   await req.payload.create({
      collection: 'logs',
      data: obj,
   })
}
