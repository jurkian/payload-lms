import type { CollectionConfig } from 'payload'

import { panelAdminsAccess } from '@/policies/panel-admins-access'
import { groupNames } from '../shared/group-names'

export const Admins: CollectionConfig = {
  slug: 'admins',
  access: panelAdminsAccess(),
  admin: {
    useAsTitle: 'email',
    group: groupNames.users,
  },
  auth: true,
  fields: [
    {
      name: 'username',
      type: 'text',
      unique: true,
    },
    {
      name: 'email',
      type: 'email',
      unique: true,
    },
    {
      name: 'fullName',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      hasMany: false,
      options: ['editor', 'manager', 'fullAdmin'],
    },
  ],
  timestamps: true,
}
