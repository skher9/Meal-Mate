import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRecipesTable1743086380004 implements MigrationInterface {
  name = 'CreateRecipesTable1743086380004';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "recipe" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" text NOT NULL, "ingredients" text array NOT NULL, "instructions" text array NOT NULL, "category" character varying NOT NULL, "isVegetarian" boolean NOT NULL DEFAULT false, "isGlutenFree" boolean NOT NULL DEFAULT false, "containsEgg" boolean NOT NULL DEFAULT false, "region" character varying NOT NULL, "prepTime" character varying NOT NULL, "cookTime" character varying NOT NULL, "servings" integer NOT NULL, "difficulty" character varying NOT NULL, "calories" integer, "protein" integer, "carbs" integer, "fat" integer, "notes" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "recipe"`);
  }
}
