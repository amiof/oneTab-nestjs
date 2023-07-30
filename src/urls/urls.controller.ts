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
  async getUrlByid(@Param("id") id: string) {
    return await this.urlsService.getUrlByid(id)

  }
  @Post()
  async CreateUrl(@Body() createUrlDto: CreateUrlDto) {
    const createdUrl = await this.urlsService.CreateUrl(createUrlDto)
    if (createdUrl) return createdUrl
    return "url dont saved"
  }

  @Delete(":id")
  async DeleteUrl(@Param("id") id: string) {
    return await this.urlsService.deleteUrl(id)
  }
  @Patch()
  async UpdateUrl(@Body() body: UpdateUrlDto) {
    return await this.urlsService.updateUrl(body)
  }
}
