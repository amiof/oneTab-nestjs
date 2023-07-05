import { HttpException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from "bcryptjs"
@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) { }
  async login(loginDto: LoginDto) {

    const user = await this.userService.findUserByUserName(loginDto.userName)
    // console.log(user)
    if (user) {
      const passCampaire = await bcrypt.compareSync(loginDto.password, user.password)
      // console.log(passCampaire)
      if (!passCampaire) return "your user or password is not correct 1"
      return "you are login"
    }
    return "your user name or password is not correct 2"
  }

  async register(registerDto: RegisterDto) {
    const existUserByEamil = await this.userService.findUserByEmail(registerDto.email)
    const existUserByUserName = await this.userService.findUserByUserName(registerDto.userName)
    if (existUserByEamil || existUserByUserName) throw new HttpException("this user is now available", 400)
    return this.userService.createUser(registerDto)
  }
}
