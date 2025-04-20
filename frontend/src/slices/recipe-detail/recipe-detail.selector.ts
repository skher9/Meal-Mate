import { RootState } from '../../redux/store';

export const recipeDetail = (state: RootState) => state.recipeDetail.recipeDetail;
export const isRecipeDetailLoading = (state: RootState) => state.recipeDetail.loading;
export const selectRecipeDetailError = (state: RootState) => state.recipeDetail.error;
    