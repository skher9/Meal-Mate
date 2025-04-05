// src/recipes/recipes.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from './recipe.entity';
import { Repository } from 'typeorm';
import { CreateRecipeDto } from './dto/create-recipe.dto';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private recipeRepository: Repository<Recipe>,
  ) {}

  async create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const newRecipe = this.recipeRepository.create(createRecipeDto);
    return await this.recipeRepository.save(newRecipe);
  }

  async findAll(): Promise<Recipe[]> {
    return this.recipeRepository.find();
  }
  // (we'll add other functions like findAll, update, etc. later)
}
