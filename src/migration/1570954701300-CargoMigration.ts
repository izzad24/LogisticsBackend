import {MigrationInterface, QueryRunner} from "typeorm";

export class CargoMigration1570954701300 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "cargo" ("id" SERIAL NOT NULL, "cargo_type" character varying NOT NULL, "cargo_weight" integer NOT NULL, "cargo_dimensions" character varying NOT NULL, "disclaimer_flag" boolean NOT NULL, "hazard_flag" boolean NOT NULL, "insurance_flag" boolean NOT NULL, "ship_to_name" character varying NOT NULL, "ship_to_contact" character varying NOT NULL, "ship_to_add_1" character varying NOT NULL, "ship_to_add_2" character varying NOT NULL, "ship_to_state" character varying NOT NULL, "ship_to_postcode" integer NOT NULL, "ship_to_country" character varying NOT NULL, "ship_from_name" character varying NOT NULL, "ship_from_contact" character varying NOT NULL, "ship_from_add_1" character varying NOT NULL, "ship_from_add_2" character varying NOT NULL, "ship_from_state" character varying NOT NULL, "ship_from_postcode" integer NOT NULL, "ship_from_country" character varying NOT NULL, "shipping_package" character varying NOT NULL, CONSTRAINT "PK_1af8b2a790f35aedbe7e3da4199" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "cargo"`, undefined);
    }

}
