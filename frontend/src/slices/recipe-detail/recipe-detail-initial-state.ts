import { Recipe } from '../../interface/recipe-interface';

export interface RecipeDetailState {
  recipeDetail: Recipe | null;
  loading: boolean;
  error: string | null;
}

export const recipeDetailInitialState: RecipeDetailState = {
  recipeDetail: null,
  loading: false,
  error: null,
};
