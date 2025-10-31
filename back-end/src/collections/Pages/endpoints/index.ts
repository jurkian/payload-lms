import { Endpoint } from 'payload'

import { getPage } from './get'

export const pagesEndpoints: Endpoint[] = [
   {
      path: '/:slug',
      method: 'get',
      handler: getPage,
   },
]
