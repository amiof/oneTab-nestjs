import { IsNotEmpty, IsString } from "class-validator";

export class AddFavDto{
  @IsString()
  @IsNotEmpty()
  urlId

}
