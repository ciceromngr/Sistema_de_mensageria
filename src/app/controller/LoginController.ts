import { Request, Response } from "express";
import { LoginService } from "../service/LoginService";

class LoginController {

    async handle(req: Request, res: Response) {
        const loginService = new LoginService()
        const { email, password } = req.body

        const user = await loginService.handle(email, password)

        return res.json(user)
    }

}

export { LoginController }