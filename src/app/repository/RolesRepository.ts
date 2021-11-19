import { EntityRepository, Repository } from "typeorm";
import { Roles } from "../../database/entities/Roles";

@EntityRepository(Roles)
class RolesRepository extends Repository<Roles> {

}

export { RolesRepository }