import type { Access } from 'payload'

export const authenticated: Access = ({ req }) => {
   const { user } = req
   return Boolean(user)
}
