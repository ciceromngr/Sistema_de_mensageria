import { EntityRepository, Repository } from "typeorm";
import { Permissions } from "../../database/entities/Permissions";

@EntityRepository(Permissions)
class PermissionsRepository extends Repository<Permissions> {

}

export { PermissionsRepository }