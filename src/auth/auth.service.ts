import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDTO } from './dto/register.dto';
import { compare, hash } from 'bcrypt';
import { LoginDTO } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { jwt_config } from 'src/config/jwt.config';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async register(data: RegisterDTO) {
    const users = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });
    if (users) {
      throw new HttpException('Email sudah terdaftar', HttpStatus.FOUND);
    }
    data.password = await hash(data.password, 12);
    await this.prisma.users.create({
      data,
    });
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Register berhasil',
    };
  }

  async login(data: LoginDTO) {
    const users = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });
    if (!users) {
      throw new HttpException('Pengguna tidak ditemukan', HttpStatus.NOT_FOUND);
    }

    const userPassword = await compare(data.password, users.password);
    if (userPassword) {
      const accessToken = this.generateJWT({
        sub: users.id,
        name: users.name,
        email: users.email,
      });
      return {
        statusCode: 200,
        token: accessToken,
        message: 'Login berhasil',
      };
    } else {
      throw new HttpException(
        'Email atau password tidak cocok',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async profile(user_id: number) {
    const userProfile = await this.prisma.users.findFirst({
      where: {
        id: user_id,
      },
      select: {
        name: true,
        email: true,
        avatar: true,
        tasks: true,
      },
    });
    if (userProfile) {
      return {
        statusCode: HttpStatus.OK,
        data: userProfile,
      };
    }
    throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
  }

  async uploadAvatar(user_id: number, avatar) {
    const user = await this.prisma.users.findFirst({
      where: {
        id: user_id,
      },
    });
    if (user) {
      const updateAvatar = await this.prisma.users.update({
        data: {
          avatar: avatar,
        },
        where: {
          id: user_id,
        },
      });
      if (updateAvatar) {
        return {
          statusCode: HttpStatus.CREATED,
          message: 'Upload avatar berhasil',
        };
      }
    }
    throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
  }

  generateJWT(payload: any) {
    return this.jwtService.sign(payload, {
      secret: jwt_config.secret,
      expiresIn: jwt_config.expired,
    });
  }
}
