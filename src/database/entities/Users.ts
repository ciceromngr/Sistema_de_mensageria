import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Roles } from "./Roles";

@Entity('users')
class Users {

    @PrimaryColumn({
        type: 'integer',
        generated: 'increment'
    })
    readonly id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToMany(() => Roles)
    @JoinTable({
        name: "user_roles",
        joinColumns: [{ name: 'users_id' }],
        inverseJoinColumns: [{ name: 'roles_id' }]
    })
    roles: Roles[]
}

export { Users }