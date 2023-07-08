import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UrlsService } from './urls.service';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) { }
  @Get()
  getAllUrls() {
    this.urlsService.getAllurls()
    return "all urls"
  }

  @Post(":id")
  getUrlByid(@Param("id") id: string) {
    this.urlsService.getUrlByid()
    return "url by id"
  }

  @Delete(":id")
  DeleteUrl(@Param("id") id: string) {
    this.urlsService.deleteUrl()
    return "deleted url"
  }
  @Patch()
  UpdateUrl() {
    this.urlsService.updateUrl()
    return "updated url "
  }
}
