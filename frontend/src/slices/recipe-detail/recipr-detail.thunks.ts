import { createAsyncThunk } from "@reduxjs/toolkit";
import { Recipe } from "../../interface/recipe-interface";
import { getRecipeById } from "../../services/recipe-service";

export const fetchRecipeByIdThunk = createAsyncThunk<Recipe, number>(
    'recipe/fetchById',
    async (id, { rejectWithValue }) => {
      try {
        const response = await getRecipeById(id); 
        return response;
      } catch (error: any) {
        return rejectWithValue(error.message || 'Failed to fetch recipe');
      }
    }
  );