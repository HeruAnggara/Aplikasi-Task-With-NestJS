import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDTO } from './dto/create.task.dto';
import { UpdateTaskDTO } from './dto/update.task.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @ApiBearerAuth('accessToken')
  @UseGuards(AuthGuard)
  @UsePipes(ValidationPipe)
  @Post()
  async createTask(@Body() body: CreateTaskDTO) {
    return await this.taskService.createTask(body);
  }

  @ApiBearerAuth('accessToken')
  @UseGuards(AuthGuard)
  @Get()
  async getAllTask() {
    return await this.taskService.getAllTask();
  }

  @ApiBearerAuth('accessToken')
  @UseGuards(AuthGuard)
  @Get('/:task_id')
  async getTaskById(@Param('task_id') task_id) {
    return await this.taskService.getTaskById(+task_id);
  }

  @ApiBearerAuth('accessToken')
  @UseGuards(AuthGuard)
  @UsePipes(ValidationPipe)
  @Put('/:task_id')
  async updateTaskById(@Param('task_id') task_id, @Body() body: UpdateTaskDTO) {
    return await this.taskService.updateTaskById(+task_id, body);
  }

  @ApiBearerAuth('accessToken')
  @UseGuards(AuthGuard)
  @Delete('/:task_id')
  async deleteTaskById(@Param('task_id') task_id) {
    return await this.taskService.deleteTaskById(+task_id);
  }
}
