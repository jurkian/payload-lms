import { BeforeDeleteHook } from 'node_modules/payload/dist/collections/config/types'
import { User } from '@/payload-types'
import { Payload } from 'payload'

// Deleting the courses will also trigger the hook to delete the lessons
const deleteLeftovers = async (payload: Payload, user: User) => {
   try {
      await payload.delete({
         collection: 'courses',
         where: {
            createdBy: {
               equals: user.id,
            },
         },
      })

      await payload.delete({
         collection: 'comments',
         where: {
            submittedBy: {
               equals: user.id,
            },
         },
      })
   } catch (err) {
      console.log(err)
   }
}

export const beforeDelete: BeforeDeleteHook = async ({ id, req }) => {
   const { payload } = req

   const foundUser = await payload.findByID({
      collection: 'users',
      id,
   })

   if (!foundUser) {
      return
   }

   await deleteLeftovers(payload, foundUser)

   return
}
