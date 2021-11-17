import { getCustomRepository } from 'typeorm'
import * as yup from 'yup'
import Queue from '../../background/libs/Queue'
import IHandleUserRequest from '../../interfaces/HandleUsers'
import { UsersRepository } from '../repository/UsersRepository'

class UsersService {

    async handle({ name, email, password }: IHandleUserRequest) {

        const userRepository = getCustomRepository(UsersRepository)

        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().required(),
            password: yup.string().required()
        })

        if (!(await schema.isValid({ name, email, password }))) throw new Error("Todos os campos, são obrigatorios!")

        // verificar se o email ja foi cadastrado

        const userAlreadyExist = await userRepository.findOne({ email })

        if (userAlreadyExist) throw new Error("Usuario já esta cadastro na base de dados!")

        const user = userRepository.create({
            name,
            email,
            password
        })

        await userRepository.save(user)

        // enviar um email de confirmacao 
        await Queue.add('SendMailForUser', { name, email })

        return {
            name,
            email,
            msg: "Cadastro realizado com sucesso!"
        }
    }

}

export { UsersService }