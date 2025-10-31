import { Endpoint } from 'payload'

import { getComments } from './get'
import { createComment } from './create'
import { deleteComment } from './delete'

export const commentsEndpoints: Endpoint[] = [
   {
      path: '/:relatedLessonId',
      method: 'get',
      handler: getComments,
   },
   {
      path: '/',
      method: 'post',
      handler: createComment,
   },
   {
      path: '/:commentId',
      method: 'delete',
      handler: deleteComment,
   },
]
