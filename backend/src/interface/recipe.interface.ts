export interface RecipeData {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  category: string;
  isVegetarian: boolean;
  isGlutenFree: boolean;
  containsEgg: boolean;
  region: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  notes: string;
  id?: number;
}
