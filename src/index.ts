import 'dotenv/config'
import 'reflect-metadata'
import './database/index'
import express, { Request, Response } from 'express'
import cors from 'cors'
import { routes } from './router/routes'

class App {

    public app

    constructor() {
        this.app = express()

        this.middlewares()
        this.router()
        this.exceptionHandler()

    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }))
    }

    router() {
        this.app.use(routes)
    }

    exceptionHandler() {
        this.app.use(
            (err: Error, req: Request, res: Response) => {
                if (err instanceof Error) {
                    return res.status(200).json(err.message)
                }

                return res.status(500).json({ msg: 'Internal server error' })
            })
    }
}

new App().app.listen(process.env.NODE_PORT, () => console.log(`Server is Running on port: ${process.env.NODE_PORT}`))