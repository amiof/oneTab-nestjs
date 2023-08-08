import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class TagToUrlDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'test', description: 'urlId' })
  urlId: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '12155-dfdf-34324dd-343453', description: 'tagId' })
  tagId: string;
}
