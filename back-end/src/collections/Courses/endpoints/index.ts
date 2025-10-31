import { Endpoint } from 'payload'

import { getCourses } from './get'
import { createCourse } from './create'
import { deleteCourse } from './delete'

export const coursesEndpoints: Endpoint[] = [
   {
      path: '/',
      method: 'get',
      handler: getCourses,
   },
   {
      path: '/',
      method: 'post',
      handler: createCourse,
   },
   {
      path: '/:courseId',
      method: 'delete',
      handler: deleteCourse,
   },
]
