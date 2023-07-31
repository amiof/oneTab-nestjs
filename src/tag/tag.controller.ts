import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { TagService } from './tag.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AddTagDto } from './dto/addTagDto.dto';
import { FindTagDTo } from './dto/FindTag.DTo';
//FIXME: find tagbyName not working fix it later
@ApiTags('tags')
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @ApiOperation({ summary: 'add Tag' })
  @Post()
  async addTag(@Body() addTagDto: AddTagDto) {
    return this.tagService.addTag(addTagDto);
  }
  @ApiOperation({ summary: 'get all tags available' })
  @Get()
  getAllTags() {
    return this.tagService.getAllTag();
  }

  @ApiOperation({ summary: 'find tag by name ' })
  @Post('/findtag')
  async findTagByName(@Body() body: FindTagDTo) {
    console.log(body);
    return await this.tagService.findTagByName(body);
  }

  @ApiOperation({ summary: 'get all tags of a user' })
  @Post('userTag')
  getUserTags(@Body() body:{email:string}) {
    return this.tagService.getUserTags(body.email);
  }

  @ApiOperation({ summary: 'delete user tag' })
  @Delete(":id")
  removeTag(@Param() id:{id:string}) {
    return this.tagService.removeTag(id.id);
  }
}
