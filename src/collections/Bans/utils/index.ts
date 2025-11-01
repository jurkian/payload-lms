import { findOne } from '@/@utils/payload'
import { Payload } from 'payload'

export const checkIsBanned = async (payload: Payload, email: string): Promise<boolean> => {
   const foundBan = await findOne(
      payload.find({
         collection: 'bans',
         where: {
            or: [
               // We either have a user pointed directly in bannedUsers array
               {
                  'bannedUsers.user.email': {
                     equals: email.toLowerCase(),
                  },
               },
               // Or we have his email in one of the selected features (because maybe he doesn't have an account)
               {
                  and: [
                     {
                        'bannedFields.selectedFeature': {
                           equals: 'email',
                        },
                     },
                     {
                        'bannedFields.value': {
                           contains: email.toLowerCase(),
                        },
                     },
                  ],
               },
            ],
         },
      }),
   )

   if (!foundBan) {
      return false
   }

   return Boolean(foundBan.isActive)
}
