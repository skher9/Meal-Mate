import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipesModule } from './recipes/recipes.module';
import { Recipe } from './recipes/recipe.entity'; // Required to load the entity

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // ✅ Hardcoded and safe
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'meal_mate',
      entities: [Recipe], // 👈 Required to register the table
      synchronize: true, // 👈 You can keep this true while developing
      autoLoadEntities: true,
    }),
    RecipesModule,
  ],
})
export class AppModule {}
