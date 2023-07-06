import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"
export class LoginDto {
  @ApiProperty({example:"amir",description:"import userName "})
  @IsString()
  @IsNotEmpty()
  userName: string

  @ApiProperty({example:"12345",description:"import userName ",format:"string",})
  @IsNotEmpty()
  @IsString()
  password: string

}
