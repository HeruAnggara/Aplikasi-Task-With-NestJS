import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Company')
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    return await this.companyService.create(createCompanyDto);
  }

  @Get()
  async findAll() {
    return await this.companyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return await this.companyService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id, @Body() updateCompanyDto: UpdateCompanyDto) {
    return await this.companyService.update(+id, updateCompanyDto);
  }

  @Delete(':id')
  async remove(@Param('id') id) {
    return await this.companyService.remove(+id);
  }
}
