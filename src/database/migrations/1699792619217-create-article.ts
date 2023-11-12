import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateArticle1685464573824 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "articles" (
                "id" SERIAL NOT NULL,
                "title" character varying NOT NULL, 
                "author" character varying NOT NULL, 
                "content" TEXT NOT NULL,
                "publication_date" DATE,
                "updated_at" timestamp,
                "created_at" timestamp,
                CONSTRAINT "PK_40808690eb7b915046558c0f81b" PRIMARY KEY ("id")
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "articles"`);
  }
}
