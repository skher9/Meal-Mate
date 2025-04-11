// src/auth/auth.controller.ts

import {
  Controller,
  Post,
  Body,
  Put,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('login')
  login(@Body('email') email: string, @Body('password') password: string) {
    return this.authService.login(email, password);
  }

  @Post('register')
  register(@Body('email') email: string, @Body('password') password: string) {
    return this.authService.register(email, password);
  }

  @Put('password')
  async updatePassword(
    @Body('email') email: string,
    @Body('passwrd') password: string,
  ) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return this.authService.updatePassword(user, password);
  }
}
