import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePermissionsRoles1637344016429 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'permisssions_role',
                columns: [
                    {name: 'permissions_id', type: 'uuid'},
                    {name: 'roles_id', type: 'uuid'}
                ],
                foreignKeys: [
                    {
                        name: 'fk_permission_role_',
                        referencedTableName: 'permissions',
                        referencedColumnNames: ["id"],
                        columnNames: ["permissions_id"],
                        onDelete: "CASCADE",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: 'fk_role_permission_',
                        referencedTableName: 'roles',
                        referencedColumnNames: ["id"],
                        columnNames: ["roles_id"],
                        onDelete: "CASCADE",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('permisssions_role')
    }

}
