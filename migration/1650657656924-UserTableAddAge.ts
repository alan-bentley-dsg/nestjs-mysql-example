import {MigrationInterface, QueryRunner} from "typeorm";

export class UserTableAddAge1650657656924 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `user` ADD age INT(11)');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('user','age');
    }

}
