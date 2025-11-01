import { PayloadRequest } from 'payload'
import { sendError } from '@/@utils/errors'
import { sendResponse } from '@/@utils/response'

export type DeleteCommentRequest = {
   commentId: number
}

export const deleteComment = async (req: PayloadRequest) => {
   const { payload } = req
   const { commentId } = req.routeParams as DeleteCommentRequest

   const { user } = req

   // TODO: form validation
   // TODO: policy to check if submitting user is logged in

   if (!user) {
      return sendError('Please log in')
   }

   const deletedComment = await payload.delete({
      collection: 'comments',
      where: {
         id: {
            equals: commentId,
         },
      },
   })

   return sendResponse('Comment successfully deleted')
}
