import { panelAdminsAccess } from '@utils/policies/accesses/panel-admins-access'
import type { CollectionConfig } from 'payload'
import { groupNames } from '../shared/group-names'
import { pagesEndpoints } from './endpoints'

export const Pages: CollectionConfig = {
   slug: 'pages',
   access: panelAdminsAccess(),
   admin: {
      group: groupNames.others,
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
         name: 'content',
         type: 'richText',
      },
   ],
   versions: {
      drafts: true,
   },
   timestamps: true,
   endpoints: pagesEndpoints,
}
