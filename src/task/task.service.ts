import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDTO } from './dto/create.task.dto';
import { UpdateTaskDTO } from './dto/update.task.dto';
import { REQUEST } from '@nestjs/core';
import { Inject } from '@nestjs/common';

@Injectable()
export class TaskService {
  constructor(
    private prisma: PrismaService,
    @Inject(REQUEST) private req: any,
  ) {}

  async createTask(data: CreateTaskDTO) {
    data.id_user = this.req.user.id;
    await this.prisma.tasks.create({
      data: data,
    });
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Data task berhasil ditambahkan',
    };
  }

  async getAllTask() {
    const task = await this.prisma.tasks.findMany({
      where: {
        id_user: this.req.user.id,
      },
    });
    return {
      statusCode: HttpStatus.OK,
      data: task,
    };
  }

  async getTaskById(task_id: number) {
    const task = await this.prisma.tasks.findFirst({
      where: {
        id: task_id,
        id_user: this.req.user.id,
      },
    });
    return {
      data: task,
    };
  }

  async updateTaskById(task_id: number, data: UpdateTaskDTO) {
    data.id_user = this.req.user.id;
    await this.prisma.tasks.update({
      where: {
        id: task_id,
      },
      data: data,
    });
    return {
      message: 'Data task berhasil diperbarui',
    };
  }

  async deleteTaskById(task_id) {
    await this.prisma.tasks.delete({
      where: {
        id: task_id,
      },
    });
    return {
      message: 'Data task berhasil dihapus',
    };
  }
}
