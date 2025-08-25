import type { CollectionConfig } from 'payload'

import { groupNames } from '../shared/group-names'
import hooks from './hooks'

export const Courses: CollectionConfig = {
  slug: 'courses',
  admin: {
    group: groupNames.courses,
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
    {
      name: 'price',
      type: 'number',
      min: 1,
      admin: {
        step: 1,
      },
    },
    {
      name: 'createdBy',
      type: 'relationship',
      relationTo: 'users',
    },
  ],
  hooks,
  timestamps: true,
}
