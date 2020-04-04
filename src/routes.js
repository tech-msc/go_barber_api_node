import { Router } from 'express'
// import User from './app/models/User'
import UserController from './app/controllers/UserController'

const routes = new Router()

// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Matheus',
//     email: 'matheus@matheus.com',
//     password_hash: '123456'
//   })

//   return res.json(user)
// })

routes.post('/users', UserController.store)

export default routes
