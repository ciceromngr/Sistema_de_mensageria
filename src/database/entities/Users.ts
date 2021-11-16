import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

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
}

export { Users }