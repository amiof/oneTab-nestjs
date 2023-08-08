import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class GetUserHeaderByIdDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: "3423234-34523-34sdfq23-343sa", description: "headerId" })
  headerId: string

}
