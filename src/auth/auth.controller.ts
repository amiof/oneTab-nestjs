import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Auth")
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }
  @Post("register")
  Register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto)
  }
  @Post('login')
  Login(@Body()loginDto:LoginDto) {
    return this.authService.login(loginDto)

  }
}
