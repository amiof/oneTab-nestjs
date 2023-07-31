import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class FindTagDTo {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'test', description: 'TagName' })
  TagName: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'ali7@gmai.com', description: 'email' })
  email: string;
}
