import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'

export function ensureAuthentiaction(req: Request, res: Response, next: NextFunction) {

    const authToken = req.headers.authorization

    const [ , token ] = authToken.split(' ')

    try {
        verify(token, process.env.JWT_SECRET_KEY)
        return next()
    } catch (error) {
        throw new Error("Token invalid!")
    }
}