import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class UpdateTaskDTO {
  id_user: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  task_name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  task_description: string;
}
