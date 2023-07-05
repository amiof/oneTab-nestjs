import { IsEmail, IsString, IsNotEmpty, IsNumber, IsOptional } from "class-validator"
export class RegisterDto {
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
  @IsString()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
  @IsNumber()
  @IsOptional()
  readonly age: number;
}
