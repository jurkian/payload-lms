import { getLocalPayload } from '@utils/payload'
import dayjs from '@utils/dayjs'

// If user has no activated his account for 14 days, delete everything we have about his account
export const removeInactiveAccs = async () => {
   const payload = await getLocalPayload()

   const createdBefore = dayjs().subtract(14, 'days').format()

   const deletedUsers = await payload.delete({
      collection: 'users',
      where: {
         confirmed: { equals: false },
         createdAt: { less_than: createdBefore },
      },
   })

   console.log(`${deletedUsers.docs.length} inactive users successfully deleted`)
}
