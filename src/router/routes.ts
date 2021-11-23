import { Router } from 'express'
import { LoginController } from '../app/controller/LoginController'
import { PermissionsController } from '../app/controller/PermissisonsController'
import { RolesController } from '../app/controller/RolesController'
import { UsersController } from '../app/controller/UsersController'

import { is } from '../middlewares/Permissions'

const routes = Router()
const userController = new UsersController()
const loginController = new LoginController()
const permissionsController = new PermissionsController()
const rolesController = new RolesController()

routes.post('/users', userController.handle)
routes.post('/login', loginController.handle)
routes.post('/permissions', permissionsController.create)
routes.post('/roles', rolesController.create)

routes.get('/produtos', is(["ROLE_ADMIN"]) ,(req, res) => {
    return res.json([
        { id: 1, name: 'hello worlds' }
    ])
})

export { routes }