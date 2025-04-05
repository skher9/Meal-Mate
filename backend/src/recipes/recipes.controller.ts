// src/recipes/recipes.controller.ts

import { Body, Controller, Get, Post } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { Recipe } from './recipe.entity';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  createRecipe(@Body() createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    return this.recipesService.create(createRecipeDto);
  }

  @Get()
  getAllRecipes(): Promise<Recipe[]> {
    return this.recipesService.findAll();
  }
}
