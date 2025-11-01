import { sendResponse } from '@/@utils/response'
import Stripe from 'stripe'

import { getLocalPayload } from '@utils/payload'
import { NextRequest } from 'next/server'

if (!process.env.STRIPE_SECRET_KEY) {
   throw new Error('STRIPE_SECRET_KEY is not set')
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(req: NextRequest) {
   const signature = req.headers.get('stripe-signature')

   if (!signature) {
      return sendResponse('Missing stripe-signature header', 400)
   }

   const body = Buffer.from(await req.arrayBuffer())

   let event: Stripe.Event

   try {
      event = stripe.webhooks.constructEvent(
         body,
         signature,
         process.env.STRIPE_WEBHOOK_SECRET as string,
      )
   } catch {
      return sendResponse('Invalid signature', 400)
   }

   if (event.type === 'checkout.session.completed') {
      // TODO: update payment for some user
      const payload = await getLocalPayload()

      const updatedUser = await payload.update({
         collection: 'users',
         where: {},
         data: {},
      })
   }

   return sendResponse('All good')
}
