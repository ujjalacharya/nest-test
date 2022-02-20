import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { ILike, Repository } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>){

  }
  async login(loginUserDto: LoginUserDto) {

    const userFound = this.userRepository.findOne({where: {email: loginUserDto.email}})
    if(!userFound) throw new BadRequestException("Email does not exist")

    return loginUserDto
  }

  async register(registerUserDto: LoginUserDto) {

    const userFound = this.userRepository.findOne({where: {email: registerUserDto.email}})
    if(userFound) throw new BadRequestException("Email already exists")

    const {email, password} = registerUserDto

    const newUser = this.userRepository.create({email, password})

    await this.userRepository.save(newUser)


    return newUser
  }
}
