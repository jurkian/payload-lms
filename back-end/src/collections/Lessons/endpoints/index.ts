import { Endpoint } from 'payload'

import { getLessons } from './get'
import { createLesson } from './create'
import { deleteLesson } from './delete'

export const lessonsEndpoints: Endpoint[] = [
   {
      path: '/:relatedCourseId',
      method: 'get',
      handler: getLessons,
   },
   {
      path: '/',
      method: 'post',
      handler: createLesson,
   },
   {
      path: '/:lessonId',
      method: 'delete',
      handler: deleteLesson,
   },
]
