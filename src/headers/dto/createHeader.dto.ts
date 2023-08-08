import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { CreateUrlDto } from "src/urls/dto/createUrl.dto";

export class CreateHeaderDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'headerName1', description: "headerName" })
  readonly headerName: string
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'amir@gmail.com', description: "userEmail" })
  userEmail: string
  // @IsString()
  // @IsNotEmpty()
  // @ApiProperty({ example: '[{url:"google.com",title:"google",userEmail:"amir@googl.com"}]', description: "userEmail" })
  // urls: CreateUrlDto | CreateUrlDto[]
}
