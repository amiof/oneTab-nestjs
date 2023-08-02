import { IsNotEmpty, IsString } from "class-validator";

export class UserUrlFavDto{
@IsString()
@IsNotEmpty()
id

}
