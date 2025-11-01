import { panelAdminsAccess } from '@utils/policies/accesses/panel-admins-access'
import type { CollectionConfig } from 'payload'
import { groupNames } from '../shared/group-names'

// Single Ban element is just a container for many values related to it
// it could be a specific registered user, username, ip, email etc.
export const Bans: CollectionConfig = {
   slug: 'bans',
   access: panelAdminsAccess(),
   admin: {
      group: groupNames.users,
   },
   fields: [
      {
         name: 'description',
         type: 'text',
      },
      {
         name: 'isActive',
         type: 'checkbox',
      },
      {
         name: 'expiresAt',
         type: 'date',
         admin: {
            date: {
               pickerAppearance: 'dayAndTime',
            },
         },
      },
      {
         name: 'bannedFields',
         type: 'array',
         fields: [
            {
               name: 'selectedFeature',
               type: 'select',
               hasMany: false,
               admin: {
                  isClearable: true,
                  isSortable: true,
               },
               options: ['username', 'ip', 'email'],
            },
            {
               name: 'value',
               type: 'text',
            },
         ],
      },
      {
         name: 'bannedUsers',
         type: 'array',
         fields: [
            {
               name: 'user',
               type: 'relationship',
               relationTo: 'users',
            },
         ],
      },
   ],
   timestamps: true,
}
