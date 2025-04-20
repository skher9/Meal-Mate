import axios from 'axios';
import { Recipe } from '../interface/recipe-interface';

const BASE_URL = 'http://localhost:4000';

export const getAllRecipes = async (filters?: Record<string, string>): Promise<Recipe[]> => {
  const response = await axios.get(`${BASE_URL}/recipes`, {
    params: filters,
  });
  return response.data;
};


export const getRecipeById = async (id: number): Promise<Recipe> => {
  const response = await axios.get(`${BASE_URL}/recipes/${id}`);
  return response.data;
};
