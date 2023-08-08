import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class GetUserHeaderDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: "amir@gmile.com", description: "userEmail" })
  userEmail: string

}
