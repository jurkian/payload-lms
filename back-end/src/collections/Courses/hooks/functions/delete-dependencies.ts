import { BeforeDeleteHook } from 'node_modules/payload/dist/collections/config/types'

export const deleteDependencies: BeforeDeleteHook = async ({ id, req }) => {
   const { payload } = req

   await payload.delete({
      collection: 'lessons',
      where: {
         relatedCourse: {
            equals: id,
         },
      },
   })

   return
}
