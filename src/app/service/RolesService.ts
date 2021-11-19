import { getCustomRepository } from "typeorm";
import IPermissionsRolesRequest from "../../interfaces/PermitionRoles";
import { RolesRepository } from "../repository/RolesRepository";

class RolesService {

    async create({ name, description }: IPermissionsRolesRequest) {
        const rolesRepository = getCustomRepository(RolesRepository)

        const rolesAlreadyExist = await rolesRepository.findOne({ name })

        if (rolesAlreadyExist) throw new Error('Roles Already exist!')

        const roles = rolesRepository.create({
            name, description
        })

        await rolesRepository.save(roles)

        return roles

    }

}

export { RolesService }