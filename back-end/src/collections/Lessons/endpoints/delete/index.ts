import { PayloadRequest } from 'payload'
import { sendError } from '@/@utils/errors'
import { sendResponse } from '@/@utils/response'

export type DeleteLessonRequest = {
   lessonId: number
}

export const deleteLesson = async (req: PayloadRequest) => {
   const { payload } = req
   const { lessonId } = req.routeParams as DeleteLessonRequest

   const { user } = req

   // TODO: form validation
   // TODO: policy to check if submitting user is logged in

   if (!user) {
      return sendError('Please log in')
   }

   const deletedLesson = await payload.delete({
      collection: 'lessons',
      where: {
         id: {
            equals: lessonId,
         },
      },
   })

   return sendResponse('Lesson successfully deleted')
}
