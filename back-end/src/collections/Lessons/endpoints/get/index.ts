import { PayloadRequest } from 'payload'
import { sendError } from '@/@utils/errors'
import { sendResponse } from '@/@utils/response'

export type GetLessonsRequest = {
   relatedCourseId: number
}

export const getLessons = async (req: PayloadRequest) => {
   const { payload } = req
   const { user } = req

   const { relatedCourseId } = req.routeParams as GetLessonsRequest

   // TODO: form validation
   // TODO: policy to check if submitting user is logged in

   if (!user) {
      return sendError('Please log in')
   }

   const fetchedLessons = await payload.find({
      collection: 'lessons',
      where: { relatedCourse: { equals: relatedCourseId } },
      limit: 999,
   })

   return sendResponse(fetchedLessons)
}
