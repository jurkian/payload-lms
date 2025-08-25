import type { CollectionConfig } from 'payload'

import { groupNames } from '../shared/group-names'
import hooks from './hooks'

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
      name: 'description',
      type: 'text',
    },
    // TODO: video URL
    {
      name: 'course',
      type: 'relationship',
      relationTo: 'courses',
    },
  ],
  hooks,
  timestamps: true,
}
