import { Request, Response } from "express";
import { UsersService } from "../service/UsersService";

class UsersController {

    async handle(req: Request, res: Response) {
        const usersService = new UsersService()
        const user = await usersService.handle(req.body) // {name, email, password}
        return res.status(201).json(user)
    }

}

export { UsersController }