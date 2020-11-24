import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createDestination1603853687175 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'destinations',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'phone',
                    type: 'number',
                },
                {
                    name: 'email',
                    type: 'varchar',
                },
                {
                    name: 'opening_hours',
                    type: 'varchar',
                },
                {
                    name: 'address',
                    type: 'varchar',      
                },
                {
                    name: 'cep',
                    type: 'number',  
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('destinations');
    }

}
