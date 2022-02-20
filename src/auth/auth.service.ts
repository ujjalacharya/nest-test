import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {

    const user = await this.usersService.findOne(username);

    if (user && user.password === password) {
        const {password, ...result} = user
        return result
    }
    return null
}

  async login(user: User) {

    const payload = { sub: user.id, username: user.username };

    return { accessToken: this.jwtService.sign(payload) };
  }

  async register(registerUserDto: LoginUserDto) {
    const userFound = await this.usersService.findOne(registerUserDto.username);
    if (userFound) throw new BadRequestException('username already exists');

    const { username, password } = registerUserDto;

    const newUser = this.usersService.create({ username, password });

    await newUser.save()
    return newUser;
  }
}
