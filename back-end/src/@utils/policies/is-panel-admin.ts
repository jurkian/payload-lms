import type { Access } from 'payload'

export const isPanelAdmin: Access = ({ req: { user } }) => {
   return user?.collection === 'admins'
}
