import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AddFavDto } from './dto/addFav.dto';
import { FavUrlsService } from './fav-urls.service';
import { UserUrlFavDto } from './dto/userUrlFav.dto';

@ApiTags('favUrls')
@Controller('fav-urls')
export class FavUrlsController {
  constructor(private readonly favUrlService: FavUrlsService) { }
  @ApiOperation({ summary: 'add url to fav' })
  @Post()
  async addToFav(@Body() addFav: AddFavDto) {
    return await this.favUrlService.addToFav(addFav);
  }
  @ApiOperation({ summary: 'get all fav urls a user' })
  @Post('/usrFav')
  getAUserFavs(@Body() userUrlFavDto: UserUrlFavDto) {
    return this.favUrlService.getAuserFavs(userUrlFavDto);
  }
  @ApiOperation({ summary: 'find fav by id' })
  @Post("/findById")
  getFavById(@Body() body: { id: string }) {
    const { id } = body
    return this.favUrlService.FindFavById(id);
  }
  @ApiOperation({ summary: 'get all fav' })
  @Get()
  getAllFav(){
    return this.favUrlService.getAllFav();
  }
  @ApiOperation({ summary: 'delete a url from fav' })
  @Delete('deletFav')
  deleteUrlfromFav(@Param() id: string) {
    this.favUrlService.deleteUrlFromFav(id);
  }
}
