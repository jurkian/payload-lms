import crypto from 'crypto'

import { sendError } from '@/@utils/errors'
import { checkIsBanned } from '@/collections/Bans/utils'

import { PayloadRequest } from 'payload'

import { saveLog } from '@/collections/Logs/utils'
import { User } from '@/payload-types'
import { sendResponse } from '@/@utils/response'
import { WithoutMeta } from '@/shared/types'

export type RegisterRequest = {
   email: string
   password: string
   username: string
   fullName: string
}

export const register = async (req: PayloadRequest) => {
   const { payload } = req
   const data = req.data as RegisterRequest

   data.email = data.email.toLowerCase()
   data.username = data.username.toLowerCase()

   const { email, username, password, fullName } = data

   // Verify if there are any conflicting users (with the same email or username)
   const conflictingUsersQuery = await payload.count({
      collection: 'users',
      where: {
         or: [
            {
               username: {
                  equals: username,
               },
            },
            {
               email: {
                  equals: email,
               },
            },
         ],
      },
   })

   if (conflictingUsersQuery.totalDocs > 0) {
      await saveLog('register-failed:email-username-taken', req)
      return sendError('Username or email is taken, try again')
   }

   // Check if user banned
   const isBannedUser = await checkIsBanned(payload, email)

   if (isBannedUser) {
      // Save log
      await saveLog('register-failed:email-blocked', req)
      return sendError('Email is not available, try again')
   }

   const newUser: WithoutMeta<User> = {
      email,
      password,
      username,
      fullName,
      confirmationToken: crypto.randomBytes(20).toString('hex'),
   }

   const createdUser = await payload.create({
      collection: 'users',
      data: newUser,
      // disableVerificationEmail: false
   })

   // Save log
   await saveLog('register-success', req)

   return sendResponse('Register success, check your email')
}
