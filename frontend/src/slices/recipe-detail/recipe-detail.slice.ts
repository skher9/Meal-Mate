import { createSlice } from '@reduxjs/toolkit';
import { recipeDetailInitialState } from './recipe-detail-initial-state';
import { fetchRecipeByIdThunk } from './recipr-detail.thunks';

export const recipeDetailSlice = createSlice({
  name: 'recipeDetail',
  initialState: recipeDetailInitialState,
  reducers: {
    // optional local reducers (if needed later)
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })        
      .addCase(fetchRecipeByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.recipeDetail = action.payload;
      })
      .addCase(fetchRecipeByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});
