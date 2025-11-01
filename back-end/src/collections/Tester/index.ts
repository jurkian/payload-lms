import type { CollectionConfig, PayloadRequest } from 'payload'

export const Tester: CollectionConfig = {
   slug: 'tester',
   access: {
      read: () => true,
      create: () => true,
      update: () => true,
      delete: () => true,
   },
   auth: false,
   fields: [
      {
         name: 'test',
         type: 'text',
      },
   ],
   endpoints: [],
}
