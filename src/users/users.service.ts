import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import userModel from 'src/entities/user.entities';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(userModel) private userRepository: Repository<userModel>) { }
  async create(createUser: CreateUserDto) {
    const user = await this.userRepository.create({...createUser})
    this.userRepository.save(user)
    if (user) return createUser;
  }

  async findAll() {
    return await this.userRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
