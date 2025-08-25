import type { Access } from 'payload'

export const isPanelAdmin: Access = ({ req: { user } }) => {
  if (user?.collection === 'admins') {
    return true
  }

  return false
}
