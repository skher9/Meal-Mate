import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RecipesModule } from './recipes/recipes.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module'; // 👈 Add this

import { Recipe } from './recipes/recipe.entity';
import { User } from './users/user.entity';
import { Note } from './notes/note.entity';
import { Planner } from './planner/planner.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'meal_mate',
      entities: [User, Recipe, Note, Planner],
      synchronize: true,
      autoLoadEntities: true,
    }),
    RecipesModule,
    AuthModule,
    UsersModule, // 👈 ADD THIS
  ],
})
export class AppModule {}
