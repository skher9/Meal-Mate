import {
  Controller,
  Post,
  Body,
  Put,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    const existingUser = await this.usersService.findByEmail(body.email);
    if (existingUser) {
      throw new BadRequestException('Email already in use');
    }
    return this.usersService.create(body.email, body.password);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.usersService.findByEmail(body.email);
    if (!user || user.password !== body.password) {
      throw new BadRequestException('Invalid credentials');
    }
    return { message: 'Login successful', user };
  }

  @Put('password')
  async resetPassword(
    @Body()
    body: {
      email: string;
      newPassword: string;
    },
  ) {
    const user = await this.usersService.findByEmail(body.email);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    user.password = body.newPassword;
    return this.usersService.update(user);
  }
}
