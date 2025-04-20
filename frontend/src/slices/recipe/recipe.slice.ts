import { createSlice } from '@reduxjs/toolkit';
import { recipeInitialState } from './recipe-initial-state';
import { fetchAllRecipesThunk } from './recipe.thunks';

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState: recipeInitialState,
  reducers: {
    // optional local reducers (if needed later)
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRecipesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllRecipesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchAllRecipesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});
