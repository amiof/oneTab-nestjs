import { IsEmail, IsString, IsNotEmpty, IsNumber } from "class-validator"
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly userName: string;
  @IsNotEmpty()
  @IsString()
  readonly first_name: string;
  @IsNotEmpty()
  @IsString()
  readonly last_name: string;
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
  @IsNumber()
  readonly age: number;
}
