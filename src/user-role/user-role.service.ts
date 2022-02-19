import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { UserRoleModel } from './entities/user-role.entity';

@Injectable()
export class UserRoleService {
  constructor(
    @InjectRepository(UserRoleModel)
    private userRoleRepository: Repository<UserRoleModel>,
  ) {}
  async create(createUserRoleDto: any) {
    const userRole = this.userRoleRepository.create(createUserRoleDto);
    await this.userRoleRepository.save(userRole);
    return userRole;
  }

  findAll() {
    return this.userRoleRepository.find({});
  }

  findOne(role: number) {
    return this.userRoleRepository.findOne({ where: { role: role } });
  }

  update(id: number, updateUserRoleDto: UpdateUserRoleDto) {
    return `This action updates a #${id} userRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} userRole`;
  }
}
