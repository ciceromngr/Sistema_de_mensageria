import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { decode } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../app/repository/UsersRepository";


async function decoder(request: Request) {

    const usersRepository = getCustomRepository(UsersRepository)

    const authorization = request.headers.authorization
    
    try {

        const [, token] = authorization.split(' ');

        const { sub } = verify(token, process.env.JWT_SECRET_KEY)

        const user = await usersRepository.findOne(parseInt(sub.toString()), { relations: ["roles"] })

        return user

    } catch (error) {

        throw new Error("Token invalid!")

    }


}

function is(role: string[]) {

    const rouleAuthorized = async (req: Request, res: Response, next: NextFunction) => {
        const user = decoder(req)

        const userRoles = (await user).roles.map(r => r.name)

        const existRoles = userRoles.some(r => role.includes(r))

        if (existRoles) return next()

        return res.status(401).json({ msg: "User not authorized" })
    }

    return rouleAuthorized

}


export { is }