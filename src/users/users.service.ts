import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import userModel from 'src/entities/user.entities';
import { hashPassword } from 'src/utils/func';
import * as jwt from "jsonwebtoken";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(userModel) private userRepository: Repository<userModel>) { }


  async createUser(createUser: CreateUserDto) {
    const user = await this.userRepository.create({ ...createUser })
    user.password = await hashPassword(createUser.password)
    user.JwtToken = await this.createJwt(user.email, "3d")
    this.userRepository.save(user)
    if (user) return user;
    return "user not create"
  }

  async findAll() {
    return await this.userRepository.find({});
  }
  async findUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } })
    // console.log(user)
    if (user) return user
    return false
  }

  async findUserByUserName(userName: string) {
    const user = await this.userRepository.findOne({ where: { userName } })
    if (user) return user
    return false
  }

  async createJwt(payload: string, expire: string) {
    const jwtToken = jwt.sign({ payload }, "secretKey", { expiresIn: expire })
    return jwtToken
  }
  async saveJwtToken(email: string, jwt: string) {
    const user = await this.findUserByEmail(email)
    if (user) {
      user.JwtToken = jwt
      this.userRepository.save(user)
      return user
    }
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
