import { Request, Response } from 'express'
import { RolesService } from '../service/RolesService'

class RolesController {

    async create(req: Request, res: Response) {

        const rolesService = new RolesService()

        const permission = await rolesService.create(req.body)

        return res.status(201).json(permission)
        
    }

}

export { RolesController }