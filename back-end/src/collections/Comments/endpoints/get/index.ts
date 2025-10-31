import { PayloadRequest } from 'payload'
import { sendError } from '@/@utils/errors'
import { sendResponse } from '@/@utils/response'

export type GetCommentsRequest = {
   relatedLessonId: number
}

export const getComments = async (req: PayloadRequest) => {
   const { payload } = req
   const { user } = req

   const { relatedLessonId } = req.routeParams as GetCommentsRequest

   // TODO: form validation
   // TODO: policy to check if submitting user is logged in

   if (!user) {
      return sendError('Please log in')
   }

   const fetchedComments = await payload.find({
      collection: 'comments',
      where: { relatedLesson: { equals: relatedLessonId } },
      limit: 999,
   })

   return sendResponse(fetchedComments)
}
