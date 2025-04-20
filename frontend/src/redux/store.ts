import { configureStore } from '@reduxjs/toolkit';
import { recipeSlice } from '../slices/recipe/recipe.slice';
import { recipeDetailSlice } from '../slices/recipe-detail/recipe-detail.slice';

export const store = configureStore({
  reducer: {
    recipe: recipeSlice.reducer,
    recipeDetail: recipeDetailSlice.reducer,
  },
});

// Types for typed dispatch + selector hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
