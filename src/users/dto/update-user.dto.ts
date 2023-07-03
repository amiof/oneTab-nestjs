import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  age?: number;
  password?: string;
  firstname?: string;
  last_name?: string;
  email?: string;
  userName?: string;
}
