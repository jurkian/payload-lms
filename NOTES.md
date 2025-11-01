1. https://payloadcms.com/docs/rest-api/overview

By default, all created routes and their methods are secured (create, read, update, delete), so you need to be logged in and pass a Bearer token to be authorized.

However, custom endpoint created for your route, is not secured by default.

So that could be also used for testing

2. When adding a new custom POST endpoint e.g. on /users collection

DO NOT prefix that with /users

Incorrect: `path: '/users/test'`
Correct: `path: '/test'`

And now you can reach it with `POST: http://localhost:3000/users/test`
