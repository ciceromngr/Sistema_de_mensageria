import { Router } from 'express'
import { UsersController } from '../app/controller/UsersController'

const routes = Router()
const userController = new UsersController()

routes.post('/users', userController.handle)

export { routes }