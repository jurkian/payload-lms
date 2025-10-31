import { Endpoint } from 'payload'
import { register } from './register'
import { login } from './login'

export const usersEndpoints: Endpoint[] = [
   {
      path: '/register',
      method: 'post',
      handler: register,
   },
   {
      path: '/login',
      method: 'post',
      handler: login,
   },
]
