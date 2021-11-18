import { Router } from 'express'
import { ensureAuthentiaction } from '../app/controller/IsAuthenticated'
import { LoginController } from '../app/controller/LoginController'
import { UsersController } from '../app/controller/UsersController'

const routes = Router()
const userController = new UsersController()
const loginController = new LoginController()

routes.post('/users', userController.handle)
routes.post('/login', loginController.handle)

// routes.use(ensureAuthentiaction)

routes.get('/produtos', (req, res) => {
    return res.json([
        { id: 1, name: 'hello worlds' }
    ])
})

export { routes }