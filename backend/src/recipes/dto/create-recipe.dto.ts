// src/recipes/dto/create-recipe.dto.ts

import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsArray,
  IsOptional,
} from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsArray()
  ingredients: string[];

  @IsArray()
  instructions: string[];

  @IsString()
  category: string;

  @IsString()
  region: string;

  @IsBoolean()
  @IsOptional()
  isVegetarian: boolean;

  @IsBoolean()
  @IsOptional()
  isGlutenFree: boolean;

  @IsBoolean()
  @IsOptional()
  containsEgg: boolean;
}
