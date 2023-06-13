import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCompanyDto) {
    await this.prisma.companies.create({
      data,
    });
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Data perusahaan berhasil dibuat',
    };
  }

  async findAll() {
    const companies = await this.prisma.companies.findMany();
    return {
      statusCode: HttpStatus.OK,
      data: companies,
    };
  }

  async findOne(id: number) {
    const company = await this.prisma.companies.findFirst({
      where: {
        id: id,
      },
    });
    return {
      statusCode: HttpStatus.OK,
      data: company,
    };
  }

  async update(id: number, data: UpdateCompanyDto) {
    await this.prisma.companies.update({
      where: {
        id: id,
      },
      data: data,
    });
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Data perusahaan berhasil diperbarui',
    };
  }

  async remove(id: number) {
    await this.prisma.companies.delete({
      where: {
        id: id,
      },
    });
    return {
      statusCode: HttpStatus.OK,
      message: 'Data perusahaan berhasil dihapus',
    };
  }
}
