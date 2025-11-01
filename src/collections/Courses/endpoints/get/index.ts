import { PayloadRequest } from 'payload'
import { sendError } from '@/@utils/errors'
import { sendResponse } from '@/@utils/response'

export const getCourses = async (req: PayloadRequest) => {
   const { payload } = req
   const { user } = req

   // TODO: form validation
   // TODO: policy to check if submitting user is logged in

   if (!user) {
      return sendError('Please log in')
   }

   const fetchedCourses = await payload.find({
      collection: 'courses',
      limit: 999,
   })

   return sendResponse(fetchedCourses)
}
