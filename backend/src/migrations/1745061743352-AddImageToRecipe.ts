import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddImageToRecipe1745061743352 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "recipe"
      ADD "imageId" character varying;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "recipe"
      DROP COLUMN "imageId";
    `);
  }
}
