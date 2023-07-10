import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateUrlDto{
@IsString()
readonly url:string
@IsString()
@IsOptional()
readonly title:string
@IsString()
@IsEmail()
readonly userEmail:string
}
