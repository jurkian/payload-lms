import { PayloadRequest } from 'payload'
import { sendError } from '@/@utils/errors'
import { sendResponse } from '@/@utils/response'

export type CreateCommentRequest = {
   text: string
   relatedLesson: number
}

export const createComment = async (req: PayloadRequest) => {
   const { payload } = req
   const data = req.data as CreateCommentRequest

   const { text, relatedLesson } = data
   const { user } = req

   // TODO: form validation
   // TODO: policy to check if submitting user is logged in

   if (!user) {
      return sendError('Please log in')
   }

   const createdComment = await payload.create({
      collection: 'comments',
      data: {
         text,
         relatedLesson,
         submittedBy: user.id,
      },
   })

   return sendResponse('Comment successfully added')
}
