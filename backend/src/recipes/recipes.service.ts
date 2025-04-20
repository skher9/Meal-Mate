import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from './recipe.entity';
import { Repository } from 'typeorm';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { FilterRecipeDto } from './dto/filter-recipe.dto'; // 👈 Add this

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private recipeRepository: Repository<Recipe>,
  ) {}

  async create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const newRecipe = this.recipeRepository.create(createRecipeDto);
    return this.recipeRepository.save(newRecipe);
  }

  async findAll(filters: FilterRecipeDto): Promise<Recipe[]> {
    const query = this.recipeRepository.createQueryBuilder('recipe');

    console.log('🔥 FILTERS:', filters);
    console.log('🛠️ SQL:', query.getSql());

    // 🔎 Normalize string filters
    if (filters.category && filters.category !== 'All') {
      query.andWhere('LOWER(recipe.category) = LOWER(:category)', {
        category: filters.category,
      });
    }

    if (filters.region) {
      query.andWhere('LOWER(recipe.region) = LOWER(:region)', {
        region: filters.region,
      });
    }

    if (filters.difficulty) {
      query.andWhere('LOWER(recipe.difficulty) = LOWER(:difficulty)', {
        difficulty: filters.difficulty,
      });
    }

    // ✅ Boolean filters — handled normally
    if (filters.isVegetarian !== undefined) {
      query.andWhere('recipe.isVegetarian = :isVegetarian', {
        isVegetarian: filters.isVegetarian === 'true',
      });
    }

    if (filters.isGlutenFree !== undefined) {
      query.andWhere('recipe.isGlutenFree = :isGlutenFree', {
        isGlutenFree: filters.isGlutenFree === 'true',
      });
    }

    if (filters.containsEgg !== undefined) {
      query.andWhere('recipe.containsEgg = :containsEgg', {
        containsEgg: filters.containsEgg === 'true',
      });
    }

    // 🔍 Search
    if (filters.search) {
      query.andWhere(
        '(LOWER(recipe.title) ILIKE LOWER(:search) OR LOWER(recipe.description) ILIKE LOWER(:search))',
        {
          search: `%${filters.search}%`,
        },
      );
    }

    return query.getMany();
  }

  async update(
    id: number,
    updateData: Partial<Recipe>,
    userId: number,
  ): Promise<Recipe> {
    const recipe = await this.recipeRepository.findOne({ where: { id } });

    if (!recipe) throw new NotFoundException('Recipe not found');
    if (recipe.authorId !== userId) {
      throw new ForbiddenException('You are not allowed to update this');
    }

    Object.assign(recipe, updateData);
    return this.recipeRepository.save(recipe);
  }

  async delete(id: number, userId: number): Promise<void> {
    const recipe = await this.recipeRepository.findOne({ where: { id } });

    if (!recipe) throw new NotFoundException('Recipe not found');
    if (recipe.authorId !== userId) {
      throw new ForbiddenException('You are not allowed to delete this');
    }

    await this.recipeRepository.remove(recipe);
  }

  async getRecipeById(id: number): Promise<Recipe> {
    const recipe = await this.recipeRepository.findOneBy({ id });
    if (!recipe) throw new NotFoundException('Recipe not found');
    return recipe;
  }
}
