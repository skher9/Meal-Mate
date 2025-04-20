export class FilterRecipeDto {
  category?: string;
  isVegetarian?: string;
  isGlutenFree?: string;
  containsEgg?: string;
  region?: string;
  search?: string;
  difficulty?: string;
}

export enum RecipeDifficulty {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
}
