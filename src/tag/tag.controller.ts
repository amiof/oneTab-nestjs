import { Controller, Delete, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { TagService } from './tag.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("tags")
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @ApiOperation({ summary: 'add Tag' })
  @Post()
  addTag() {
    return this.tagService.addTag();
  }
  @ApiOperation({ summary: 'get all tags of a user' })
  @Post(":id")
  getUserTags(@Param("id",ParseUUIDPipe) id:string ) {
    return this.tagService.getUserTags(id);
  }
  @ApiOperation({ summary: 'get all tags available' })
  @Get()
  getAllTags() {
    return this.tagService.getAllTag();
  }
  @ApiOperation({ summary: 'delete user tag' })
  @Delete()
  removeTag() {
    return this.tagService.removeTag();
  }
}
