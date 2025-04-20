import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Planner } from './planner.entity';
import { Repository } from 'typeorm';
import { CreatePlannerDto } from './dto/create-planner.dto';
import { Recipe } from '../recipes/recipe.entity';
import { User } from '../users/user.entity';

@Injectable()
export class PlannerService {
  constructor(
    @InjectRepository(Planner)
    private readonly plannerRepo: Repository<Planner>,

    @InjectRepository(Recipe)
    private readonly recipeRepo: Repository<Recipe>,
  ) {}

  async createOrUpdatePlanner(
    dto: CreatePlannerDto,
    user: { id: number },
  ): Promise<Planner> {
    const recipe = await this.recipeRepo.findOneBy({ id: dto.recipeId });
    if (!recipe) throw new Error('Recipe not found');

    let planner = await this.plannerRepo.findOne({
      where: {
        user: { id: user.id },
        day: dto.day,
        mealType: dto.mealType,
      },
      relations: ['user'],
    });

    if (planner) {
      // Update existing
      planner.recipe = recipe;
    } else {
      // Create new
      planner = this.plannerRepo.create({
        user: { id: user.id } as User,
        day: dto.day,
        mealType: dto.mealType,
        recipe,
      });
    }

    return this.plannerRepo.save(planner);
  }

  async getPlannerByUser(userId: number): Promise<Planner[]> {
    return this.plannerRepo.find({
      where: { user: { id: userId } },
      relations: ['recipe'],
      order: { day: 'ASC' },
    });
  }
}
