import type { Admin, User } from '@/payload-types'
import { findOne, getLocalPayload } from '@utils/payload'

// Check if the specified user is an admin, and if yes, return his exact role
export const getAdminRole = async (user: User): Promise<Admin['role'] | boolean> => {
   if (!user) {
      return false
   }

   const payload = await getLocalPayload()

   const foundAdminUser = await findOne(
      payload.find({
         collection: 'admins',
         where: {
            email: {
               equals: user.email,
            },
         },
      }),
   )

   if (!foundAdminUser) {
      return false
   }

   return foundAdminUser.role
}
