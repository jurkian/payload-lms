import { panelAdminsAccess } from '@utils/policies/accesses/panel-admins-access'
import type { CollectionConfig } from 'payload'
import { groupNames } from '../shared/group-names'

export const Logs: CollectionConfig = {
   slug: 'logs',
   access: panelAdminsAccess(),
   admin: {
      group: groupNames.others,
   },
   fields: [
      {
         name: 'action',
         type: 'text',
      },
      {
         name: 'date',
         type: 'date',
         admin: {
            date: {
               pickerAppearance: 'dayAndTime',
            },
         },
      },
      {
         name: 'ip',
         type: 'text',
      },
      {
         name: 'userAgent',
         type: 'text',
      },
      {
         name: 'user',
         type: 'relationship',
         relationTo: 'users',
      },
   ],
   timestamps: true,
}
