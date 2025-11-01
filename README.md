# Learning Management System (LMS) made with NextJS and Payload CMS 3

It's still work in progress and it's just a prototype.

Expect bugs, but feel free to use the current code.

## Features

- Login and register routes
- Courses, lessons and comments collections - to provide content
- Stripe Webhook to handle payments
- Logs - to save important actions
- Pages - to publish some content
- Bans - to prevent some users from logging in, or even registering
- Admins - to provide a feature for special users to manage the platform
- Many other utils to handle errors, responses, help with uploads or code organization

### How to run it?

1. Install `NodeJS` and `npm`/`pnpm`
2. Run `pnpm install`

3. Go to [Stripe's Dashboard](https://dashboard.stripe.com) and search for API keys. You will need a private/secret API key
4. `.env` -> Set your private API key in `STRIPE_SECRET_KEY` variable
5. Prepare the [Stripe CLI for local debugging](https://docs.stripe.com/stripe-cli/install). When you are logged in, you will get your Stripe webhook key
6. `.env` -> Set your Stripe webhook key in `STRIPE_WEBHOOK_SECRET` variable
7. Run `pnpm dev` to start the dev server
8. You will be asked to create the first local user (admin) - do it
9. Open `http://localhost:3000` and use the app

If you want to test Stripe locally

1. Run `stripe listen --forward-to localhost:3000/api/stripe-webhook`
2. Trigger the event, like `./stripe trigger checkout.session.completed`
