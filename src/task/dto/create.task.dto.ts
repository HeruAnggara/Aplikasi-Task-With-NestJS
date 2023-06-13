import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTaskDTO {
  id_user: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  task_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  task_description: string;
}
