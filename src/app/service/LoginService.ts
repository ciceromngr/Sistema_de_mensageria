import { getCustomRepository } from "typeorm"
import * as yup from 'yup'
import { UsersRepository } from "../repository/UsersRepository"
import { sign } from 'jsonwebtoken'
import { compare } from 'bcrypt'

class LoginService {

    async handle(email: string, password: string) {
        const usersRepository = getCustomRepository(UsersRepository)
        const schema = yup.object().shape({
            email: yup.string().required(),
            password: yup.string().required()
        })

        if (!(await schema.isValid({ email, password }))) throw new Error("Credenciais incorretas!")

        const user = usersRepository.findOne({ email })

        if (!user && !await compare(password, (await user).password)) throw new Error("Email or passoworld incorrects!")

        const token = sign({ name: (await user).name, email: (await user).email },
            process.env.JWT_SECRET_KEY,
            {
                subject: (await user).id.toString(),
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )

        return token
    }

}

export { LoginService }