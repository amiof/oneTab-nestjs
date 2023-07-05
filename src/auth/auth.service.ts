import { HttpException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UsersService } from 'src/users/users.service';
import { throws } from 'assert';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) { }
  login(loginDto: LoginDto) {
    return "login"
  }
  async register(registerDto: RegisterDto) {
    const existUserByEamil = await this.userService.findUserByEmail(registerDto.email)
    const existUserByUserName = await this.userService.findUserByUserName(registerDto.userName)
    console.log("by mail",existUserByEamil,"by userName",existUserByUserName)
    if (existUserByEamil || existUserByUserName) throw new HttpException("this user is now available", 400)
    return this.userService.createUser(registerDto)
  }
}
