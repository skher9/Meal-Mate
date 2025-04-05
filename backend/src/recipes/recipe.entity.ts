import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('recipe')
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column('text', { array: true })
  ingredients: string[]; // Array of ingredients

  @Column('text', { array: true })
  instructions: string[]; // Array of step-by-step instructions

  @Column()
  category: string; // e.g., breakfast, lunch, dinner, snack, drink, meal

  @Column({ default: false })
  isVegetarian: boolean;

  @Column({ default: false })
  isGlutenFree: boolean;

  @Column({ default: false })
  containsEgg: boolean;

  @Column()
  region: string; // e.g., Italian, Indian, Mexican

  @Column()
  prepTime: string; // e.g., "15 min"

  @Column()
  cookTime: string; // e.g., "30 min"

  @Column()
  servings: number; // e.g., 2, 4, 6

  @Column()
  difficulty: string; // Easy, Medium, Hard

  @Column({ nullable: true })
  calories: number;

  @Column({ nullable: true })
  protein: number;

  @Column({ nullable: true })
  carbs: number;

  @Column({ nullable: true })
  fat: number;

  @Column({ nullable: true })
  notes: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
