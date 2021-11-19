import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repository/UsersRepository";

export function ensureAuthentiaction(req: Request, res: Response, next: NextFunction) {

    const authToken = req.headers.authorization

    const [, token] = authToken.split(' ')

    try {
        const { sub } = verify(token, process.env.JWT_SECRET_KEY)
        console.log(sub)
        return next()
    } catch (error) {
        throw new Error("Token invalid!")
    }
}