import { IsEmail, IsString, IsNotEmpty, IsNumber, IsOptional } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({example:'amiro',description:"username"})
  readonly userName: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({example:'amir',description:"import user first name "})
  readonly first_name: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({example:'meghrazi',description:"import user last name "})
  readonly last_name: string;
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({example:'arm131313@gmail.com',description:"import user email"})
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({example:'12345',description:"import user password"})
  readonly password: string;
  @IsNumber()
  @IsOptional()
  @ApiProperty({example:32,description:"import user age "})
  readonly age: number;
}
