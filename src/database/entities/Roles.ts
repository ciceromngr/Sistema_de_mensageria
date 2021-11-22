import { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { v4 as uuid } from 'uuid'
import { Permissions } from "./Permissions";

@Entity()
class Roles {

    @PrimaryColumn()
    readonly id: string

    @Column()
    name: string

    @Column()
    description: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToMany(() => Permissions)
    @JoinTable({
        name: 'permisssions_role',
        joinColumns: [{ name: "roles_id" }],
        inverseJoinColumns: [{ name: 'permissions_id' }]
    })
    permissions: Permissions[]

    constructor() {
        if (!this.id) this.id = uuid()
    }
}

export { Roles }