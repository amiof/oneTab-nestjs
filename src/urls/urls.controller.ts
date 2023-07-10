import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { UpdateUrlDto } from './dto/updateUrl.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUrlDto } from './dto/createUrl.dto';


@ApiBearerAuth("token")
@ApiTags("urls")
@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) { }
  @Get()
  getAllUrls() {
    const urls = this.urlsService.getAllurls()
    return urls
  }

  @Post(":id")
  getUrlByid(@Param("id") id: string) {
    this.urlsService.getUrlByid()
    return "url by id"
  }
  @Post()
  async CreateUrl(@Body() createUserDto: CreateUrlDto) {
    const createdUrl = await this.urlsService.CreateUrl(createUserDto)
    if (createdUrl) return createdUrl
    return "url dont saved"
  }

  @Delete(":id")
  DeleteUrl(@Param("id") id: string) {
    this.urlsService.deleteUrl()
    return "deleted url"
  }
  @Patch()
  UpdateUrl(@Body() body: UpdateUrlDto) {
    this.urlsService.updateUrl()
    return "updated url "
  }
}
