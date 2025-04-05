import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Recipe } from './recipes/recipe.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'meal_mate',
  synchronize: false,
  logging: true,
  entities: [Recipe],
  migrations: ['dist/migrations/*.js'],
  subscribers: [],
});
