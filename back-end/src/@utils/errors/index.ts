import { sendResponse } from '../response'

export const sendError = (message: string, status = 401) => {
   if (!message) {
      message = 'Default error'
   }

   return sendResponse(
      {
         errors: [
            {
               message,
            },
         ],
      },
      status,
   )
}
