import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Note } from '../notes/note.entity';
import { Planner } from '../planner/planner.entity';

@Entity('recipe')
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column('text', { array: true })
  ingredients: string[];

  @Column('text', { array: true })
  instructions: string[];

  @Column()
  category: string;

  @Column({ default: false })
  isVegetarian: boolean;

  @Column({ default: false })
  isGlutenFree: boolean;

  @Column({ default: false })
  containsEgg: boolean;

  @Column()
  region: string;

  @Column()
  prepTime: string;

  @Column()
  cookTime: string;

  @Column()
  servings: number;

  @Column()
  difficulty: string;

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

  @Column()
  authorId: number;

  @Column()
  authorName: string;

  @Column({ nullable: true })
  imageId: string;

  @ManyToOne(() => User, (user) => user.recipes)
  @JoinColumn({ name: 'authorId' }) // name must match column above!
  author: User;

  @OneToMany(() => Note, (note) => note.recipe)
  recipeNotes: Note[];

  @OneToMany(() => Planner, (planner) => planner.recipe)
  planner: Planner[];
}
