import { createAsyncThunk } from '@reduxjs/toolkit';
import { Recipe } from '../../interface/recipe-interface';
import { getAllRecipes } from '../../services/recipe-service';

export const fetchAllRecipesThunk = createAsyncThunk<Recipe[], Record<string, string> | undefined>(
  'recipe/fetchAll',
  async (filters, { rejectWithValue }) => {
    try {
      const response = await getAllRecipes(filters);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch recipes');
    }
  }
);


export const fetchRecipeByIdThunk = createAsyncThunk<Recipe, number>(
  'recipe/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      // For now, we'll use the list of recipes and find by ID
      const recipes = await getAllRecipes();
      const recipe = recipes.find(r => r.id === id);
      if (!recipe) {
        throw new Error('Recipe not found');
      }
      return recipe;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch recipe');
    }
  }
);



