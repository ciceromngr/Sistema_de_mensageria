import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserRoles1637578254355 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user_roles',
                columns: [
                    {name: 'users_id', type: 'integer'},
                    {name: 'roles_id', type: 'uuid'}
                ],
                foreignKeys: [
                    {
                        name: 'FKUser_roles',
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: 'FKRoles_user',
                        referencedTableName: "roles",
                        referencedColumnNames: ["id"],
                        columnNames: ["roles_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users_roles')
    }

}
