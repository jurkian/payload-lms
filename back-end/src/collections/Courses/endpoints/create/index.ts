import { PayloadRequest } from 'payload'
import { sendError } from '@/@utils/errors'
import { sendResponse } from '@/@utils/response'

export type CreateCourseRequest = {
   title: string
   description: string
   price: number
   createdBy: number
}

export const createCourse = async (req: PayloadRequest) => {
   const { payload } = req
   const data = req.data as CreateCourseRequest

   const { title, description, price } = data
   const { user } = req

   // TODO: form validation
   // TODO: policy to check if submitting user is logged in

   if (!user) {
      return sendError('Please log in')
   }

   const createdCourse = await payload.create({
      collection: 'courses',
      data: {
         title,
         description,
         price,
         createdBy: user.id,
      },
   })

   return sendResponse('Course successfully added')
}
