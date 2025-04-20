import {
  Body,
  Controller,
  Post,
  UseGuards,
  Req,
  Get,
  Param,
} from '@nestjs/common';
import { PlannerService } from './planner.service';
import { CreatePlannerDto } from './dto/create-planner.dto';
import { AuthGuard } from '@nestjs/passport';
import { RequestWithUser } from '../interface/request-with-user.interface';

@Controller('planner')
export class PlannerController {
  constructor(private readonly plannerService: PlannerService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  createPlanner(@Body() dto: CreatePlannerDto, @Req() req: RequestWithUser) {
    return this.plannerService.createOrUpdatePlanner(dto, req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':userId')
  getPlanner(@Param('userId') userId: string) {
    return this.plannerService.getPlannerByUser(Number(userId));
  }
}
