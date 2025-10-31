import { CollectionConfig } from 'payload'
import { isPanelAdmin } from '../is-panel-admin'

export const panelAdminsAccess = (): CollectionConfig['access'] => {
   return {
      create: isPanelAdmin,
      read: isPanelAdmin,
      update: isPanelAdmin,
      delete: isPanelAdmin,
   }
}
