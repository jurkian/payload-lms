import { findOne } from '@/@utils/payload'
import { sendResponse } from '@/@utils/response'
import { PayloadRequest } from 'payload'

export type GetPageRequest = {
   slug: string
}

export const getPage = async (req: PayloadRequest) => {
   const { payload } = req
   const { slug } = req.routeParams as GetPageRequest

   const page = await findOne(
      payload.find({
         collection: 'pages',
         where: {
            slug,
            _status: {
               equals: 'published',
            },
         },
      }),
   )

   if (!page) {
      // TODO: error message
      return null
   }

   return sendResponse({
      title: page.title,
      content: page.content,
   })
}
