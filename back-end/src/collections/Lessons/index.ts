import type { CollectionConfig } from 'payload'

import { groupNames } from '../shared/group-names'
import hooks from './hooks'
import { lessonsEndpoints } from './endpoints'

export const Lessons: CollectionConfig = {
   slug: 'lessons',
   admin: {
      group: groupNames.lessons,
   },
   fields: [
      {
         name: 'title',
         type: 'text',
      },
      {
         name: 'slug',
         type: 'text',
      },
      {
         name: 'description',
         type: 'text',
      },
      {
         name: 'videoURL',
         type: 'text',
      },
      {
         name: 'relatedCourse',
         type: 'relationship',
         relationTo: 'courses',
      },
   ],
   hooks,
   timestamps: true,
   endpoints: lessonsEndpoints,
}
