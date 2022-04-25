import {MigrationInterface, QueryRunner} from "typeorm";

export class UserTable1650656955286 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TABLE "user" ("id" BIGSERIAL NOT NULL, "firstName" varchar(255) NOT NULL, "lastName" varchar(255) NOT NULL, PRIMARY KEY ("id"))');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE "user"');
    }

}
