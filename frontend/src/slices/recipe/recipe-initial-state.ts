import { Recipe } from '../../interface/recipe-interface';

export interface RecipeState {
  list: Recipe[];
  loading: boolean;
  error: string | null;
}

export const recipeInitialState: RecipeState = {
  list: [],
  loading: false,
  error: null,
};
