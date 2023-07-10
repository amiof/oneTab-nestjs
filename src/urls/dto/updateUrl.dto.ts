import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class UpdateUrlDto {
  @IsNotEmpty()
  @IsString()
  readonly userId: string

  @IsNotEmpty()
  @IsString()
  readonly urlId: string

  @IsOptional()
  @IsString()
  readonly urls: string

  @IsOptional()
  @IsString()
  readonly title: string

}
