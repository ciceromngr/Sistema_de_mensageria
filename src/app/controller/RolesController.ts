import { Request, Response } from 'express'
import { RolesService } from '../service/RolesService'

class RolesController {

    async create(req: Request, res: Response) {

        const rolesService = new RolesService()

        const { name, description } = req.body

        const permission = await rolesService.create({ name, description })

        return res.status(201).json(permission)
        
    }

}

export { RolesController }