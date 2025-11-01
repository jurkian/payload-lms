import { CollectionConfig } from 'payload'

import { deleteDependencies } from './functions/delete-dependencies'
import { createSlug } from '@utils/text'

const hooks: CollectionConfig['hooks'] = {
   beforeDelete: [
      (args) => {
         return deleteDependencies(args)
      },
   ],
   beforeOperation: [
      async ({ args, operation }) => {
         if (operation === 'create' || operation === 'update') {
            // Update slug
            args.data.slug = createSlug(args.data.title)

            return args
         }
      },
   ],
}

export default hooks
