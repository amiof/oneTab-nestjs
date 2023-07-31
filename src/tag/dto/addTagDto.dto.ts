import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AddTagDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'test', description: 'TagName' })
  readonly TagName: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'ali7@gmai.com', description: 'email' })
  readonly email: string;
}
