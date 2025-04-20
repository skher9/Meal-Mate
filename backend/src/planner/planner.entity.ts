import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Recipe } from '../recipes/recipe.entity';

@Entity()
export class Planner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  day: string; // Example: 'Monday'

  @Column()
  mealType: string; // Example: 'breakfast' | 'lunch' | 'dinner'

  @ManyToOne(() => User, (user) => user.planner, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Recipe, (recipe) => recipe.planner, { onDelete: 'CASCADE' })
  recipe: Recipe;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
