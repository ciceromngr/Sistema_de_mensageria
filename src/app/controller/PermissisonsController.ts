import { Request, Response } from 'express'
import { PermissionsService } from '../service/PermissionsService'

class PermissionsController {

    async create(req: Request, res: Response) {

        const permissionsService = new PermissionsService()

        const { name, description } = req.body

        const permission = await permissionsService.create({ name, description })

        return res.status(201).json(permission)
        
    }

}

export { PermissionsController }