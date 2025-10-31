import { PayloadRequest } from 'payload'
import { sendError } from '@/@utils/errors'
import { sendResponse } from '@/@utils/response'

export type CreateLessonRequest = {
   title: string
   description: string
   videoURL: string
   courseId: number
}

export const createLesson = async (req: PayloadRequest) => {
   const { payload } = req
   const data = req.data as CreateLessonRequest

   const { title, description, videoURL, courseId } = data
   const { user } = req

   // TODO: form validation
   // TODO: policy to check if submitting user is logged in

   if (!user) {
      return sendError('Please log in')
   }

   const createdLesson = await payload.create({
      collection: 'lessons',
      data: {
         title,
         description,
         videoURL,
         relatedCourse: courseId,
      },
   })

   return sendResponse('Lesson successfully added')
}
