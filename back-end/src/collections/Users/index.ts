import type { CollectionConfig } from 'payload'

import { panelAdminsAccess } from '@utils/policies/accesses/panel-admins-access'
import { groupNames } from '../shared/group-names'
import { usersEndpoints } from './endpoints'

export const Users: CollectionConfig = {
   slug: 'users',
   access: panelAdminsAccess(),
   admin: {
      useAsTitle: 'email',
      group: groupNames.users,
   },
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
         name: 'resetPasswordToken',
         type: 'text',
      },
      {
         name: 'confirmationToken',
         type: 'text',
      },
      {
         name: 'isConfirmed',
         type: 'checkbox',
      },
      {
         name: 'isBlocked',
         type: 'checkbox',
         defaultValue: false,
      },
      {
         name: 'lastLogin',
         type: 'date',
      },
   ],
   endpoints: usersEndpoints,
   timestamps: true,
}
