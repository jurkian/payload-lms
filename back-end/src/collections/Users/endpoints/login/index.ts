import { PayloadRequest } from 'payload'

import { sendError } from '@/@utils/errors'
import { checkIsBanned } from '@/collections/Bans/utils'
import dayjs from '@utils/dayjs'
import { saveLog } from '@/collections/Logs/utils'
import _ from 'lodash'
import { findOne } from '@/@utils/payload'
import { sendResponse } from '@/@utils/response'

export type LoginRequest = {
   email: string
   password: string
}

export const login = async (req: PayloadRequest) => {
   const { payload } = req
   const data = req.data as LoginRequest

   data.email = data.email.toLowerCase()

   const { email, password } = data

   const foundUser = await findOne(
      payload.find({
         collection: 'users',
         where: {
            email: { equals: email },
         },
         limit: 1,
      }),
   )

   if (!foundUser) {
      await saveLog('login-failed:invalid', req)
      return sendError('Incorrect email')
   }

   // Check if user is banned
   const isUserBanned = await checkIsBanned(payload, email)

   if (isUserBanned || foundUser.isBlocked === true) {
      // Save log
      await saveLog('login-failed:email-blocked', req)
      return sendError('You can not log in')
   }

   if (!foundUser.isConfirmed) {
      return sendError('Your account is not confirmed')
   }

   // Check if password valid
   const loginResult = await payload.login({
      collection: 'users',
      data: {
         email,
         password,
      },
   })

   if (!loginResult) {
      await saveLog('login-failed:invalid', req)
      return sendError('Email or password is invalid')
   }

   // Save log
   await saveLog('login-success', req)

   // Update last login
   await payload.update({
      collection: 'users',
      where: {
         id: { equals: foundUser.id },
      },
      data: {
         lastLogin: dayjs().format(),
      },
   })

   // Return jwt token and its expiration date
   return sendResponse(_.pick(loginResult, ['exp', 'token']))
}
