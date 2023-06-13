import { ApiProperty } from '@nestjs/swagger';
import {
  MinLength,
  MaxLength,
  IsNotEmpty,
  IsString,
  IsEmail,
} from 'class-validator';

export class RegisterDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  password: string;
}
