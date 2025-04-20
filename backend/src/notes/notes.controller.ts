import {
  Body,
  Controller,
  Post,
  UseGuards,
  Req,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { AuthGuard } from '@nestjs/passport';
import { RequestWithUser } from '../interface/request-with-user.interface'; // ← your custom interface path

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  createNote(@Body() dto: CreateNoteDto, @Req() req: RequestWithUser) {
    return this.notesService.createNote(dto, req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':userId')
  getNotesByUser(@Param('userId') userId: string) {
    return this.notesService.getNotesByUser(Number(userId));
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':noteId')
  deleteNote(@Param('noteId') noteId: string, @Req() req: RequestWithUser) {
    return this.notesService.deleteNote(Number(noteId), req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':noteId')
  updateNote(
    @Param('noteId') noteId: string,
    @Body('content') content: string,
    @Req() req: RequestWithUser,
  ) {
    return this.notesService.updateNote(Number(noteId), req.user.id, content);
  }
}
