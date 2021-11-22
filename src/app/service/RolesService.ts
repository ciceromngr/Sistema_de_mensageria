import { getCustomRepository } from "typeorm";
import IPermissionsRolesRequest from "../../interfaces/PermitionRoles";
import { PermissionsRepository } from "../repository/PermissionsRepository";
import { RolesRepository } from "../repository/RolesRepository";

class RolesService {

    async create({ name, description, permissions }: IPermissionsRolesRequest) {
       
        const rolesRepository = getCustomRepository(RolesRepository)
        const permissionsRepository = getCustomRepository(PermissionsRepository)

        const rolesAlreadyExist = await rolesRepository.findOne({ name })

        if (rolesAlreadyExist) throw new Error('Roles Already exist!')

        const existPermisssions: any = await permissionsRepository.findByIds(permissions)

        const roles = rolesRepository.create({
            name, 
            description,
            permissions: existPermisssions
        })

        await rolesRepository.save(roles)

        return roles

    }

}

export { RolesService }