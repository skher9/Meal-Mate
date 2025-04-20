import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';
import { CreateNoteDto } from './dto/create-note.dto';
import { Recipe } from '../recipes/recipe.entity';
import { User } from '../users/user.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepository: Repository<Note>,

    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
  ) {}

  async createNote(
    createNoteDto: CreateNoteDto,
    user: { id: number }, // minimal user info from req.user
  ): Promise<Note> {
    const recipe = await this.recipeRepository.findOne({
      where: { id: createNoteDto.recipeId },
    });

    if (!recipe) {
      throw new Error('Recipe not found');
    }

    const newNote = this.noteRepository.create({
      content: createNoteDto.content,
      recipe,
      user: { id: user.id } as unknown as User,
    });

    return this.noteRepository.save(newNote);
  }

  async getNotesByUser(userId: number): Promise<Note[]> {
    return this.noteRepository.find({
      where: { user: { id: userId } },
      relations: ['recipe'],
      order: { createdAt: 'DESC' },
    });
  }

  async deleteNote(noteId: number, userId: number): Promise<void> {
    const note = await this.noteRepository.findOne({
      where: { id: noteId },
      relations: ['user'],
    });

    if (!note) {
      throw new Error('Note not found');
    }

    if (note.user.id !== userId) {
      throw new Error('You are not allowed to delete this note');
    }

    await this.noteRepository.remove(note);
  }

  async updateNote(
    noteId: number,
    userId: number,
    content: string,
  ): Promise<Note> {
    const note = await this.noteRepository.findOne({
      where: { id: noteId },
      relations: ['user'],
    });

    if (!note) {
      throw new Error('Note not found');
    }

    if (note.user.id !== userId) {
      throw new Error('You are not allowed to update this note');
    }

    note.content = content;
    return this.noteRepository.save(note);
  }
}
