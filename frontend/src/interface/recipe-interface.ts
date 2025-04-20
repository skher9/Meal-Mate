export interface Recipe {
    id: number;
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
    createdAt: string;
    updatedAt: string;
    authorId: number;
    authorName: string;
    imageId: string;
  }

  