import { getCustomRepository } from "typeorm";
import IPermissionsRolesRequest from "../../interfaces/PermitionRoles";
import { PermissionsRepository } from "../repository/PermissionsRepository";

class PermissionsService {

    async create({ name, description }: IPermissionsRolesRequest) {
        const permissionsRepository = getCustomRepository(PermissionsRepository)

        const permissionAlreadyExist = await permissionsRepository.findOne({ name })

        if (permissionAlreadyExist) throw new Error('Permition Already exist!')

        const permission = permissionsRepository.create({
            name, description
        })

        await permissionsRepository.save(permission)

        return permission

    }

}

export { PermissionsService }