import { PayloadRequest } from 'payload'
import { sendError } from '@/@utils/errors'
import { sendResponse } from '@/@utils/response'

export type DeleteCourseRequest = {
   courseId: number
}

export const deleteCourse = async (req: PayloadRequest) => {
   const { payload } = req
   const { courseId } = req.routeParams as DeleteCourseRequest

   const { user } = req

   // TODO: form validation
   // TODO: policy to check if submitting user is logged in

   if (!user) {
      return sendError('Please log in')
   }

   const deletedCourse = await payload.delete({
      collection: 'courses',
      where: {
         id: {
            equals: courseId,
         },
      },
   })

   return sendResponse('Course successfully deleted')
}
