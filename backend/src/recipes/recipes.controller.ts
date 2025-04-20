import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  Req,
  Query,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { Recipe } from './recipe.entity';
import { AuthGuard } from '@nestjs/passport';
import { RequestWithUser } from '../interface/request-with-user.interface'; // 👈 adjust path if needed
import { FilterRecipeDto } from './dto/filter-recipe.dto';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  createRecipe(@Body() createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    return this.recipesService.create(createRecipeDto);
  }

  @Get()
  getAllRecipes(@Query() filters: FilterRecipeDto): Promise<Recipe[]> {
    console.log('💡 Filters received:', filters);
    return this.recipesService.findAll(filters);
  }

  @Get(':id')
  getRecipeById(@Param('id') id: string) {
    return this.recipesService.getRecipeById(Number(id));
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt')) // 👈 make sure your strategy is named 'jwt'
  async updateRecipe(
    @Param('id') id: string,
    @Body() updateData: Partial<Recipe>,
    @Req() req: RequestWithUser,
  ) {
    return this.recipesService.update(+id, updateData, req.user.id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async deleteRecipe(@Param('id') id: string, @Req() req: RequestWithUser) {
    return this.recipesService.delete(+id, req.user.id);
  }
}
