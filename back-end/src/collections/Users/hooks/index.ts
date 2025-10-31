import { CollectionConfig } from 'payload'
import { beforeDelete } from './functions/before-delete'

const hooks: CollectionConfig['hooks'] = {
  beforeDelete: [
    (args) => {
      return beforeDelete(args)
    },
  ],
}

export default hooks
