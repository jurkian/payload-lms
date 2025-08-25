import type { CollectionConfig } from 'payload'

import { groupNames } from '../shared/group-names'

export const Comments: CollectionConfig = {
  slug: 'comments',
  admin: {
    group: groupNames.lessons,
  },
  fields: [
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'relatedLesson',
      type: 'relationship',
      relationTo: 'lessons',
    },
    {
      name: 'submittedBy',
      type: 'relationship',
      relationTo: 'users',
    },
  ],
  timestamps: true,
}
