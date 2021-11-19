import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity()
class Permissions {

    @PrimaryColumn()
    readonly id: string

    @Column()
    name: string

    @Column()
    description: string

    @CreateDateColumn()
    createdAt: Date

    constructor() {
        if (!this.id) this.id = uuid()
    }
}

export { Permissions }