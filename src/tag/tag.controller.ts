import { Controller, Delete, Get, Post } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @Post()
  addTag() {
    return this.tagService.addTag();
  }
  @Post()
  getUserTags() {
    return this.tagService.getUserTags();
  }
  @Get()
  getAllTags() {
    return this.tagService.getAllTag();
  }
  @Delete()
  removeTag() {
    return this.tagService.removeTag();
  }
}
