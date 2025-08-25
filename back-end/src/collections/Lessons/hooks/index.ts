import { CollectionConfig } from 'payload'

import { deleteDependencies } from './functions/delete-dependencies'

const hooks: CollectionConfig['hooks'] = {
  beforeDelete: [
    (args) => {
      return deleteDependencies(args)
    },
  ],
}

export default hooks
