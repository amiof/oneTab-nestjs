
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class  AddUrlToHeaderDto{
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '3423932-23ssdfa-3sdfs-33432', description: "headerId" })
  readonly headerId: string
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '23423-sdf234-2234sd-23sdf', description: "urlId" })
  readonly urlId: string
}
