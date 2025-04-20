import { RootState } from '../../redux/store';

export const allRecipes = (state: RootState) => state.recipe.list;
export const isRecipesLoading = (state: RootState) => state.recipe.loading;
export const selectRecipesError = (state: RootState) => state.recipe.error;

export const selectRecipeById = (state: RootState, id: number) => {
  return state.recipe.list.find(recipe => recipe.id === id);
};
