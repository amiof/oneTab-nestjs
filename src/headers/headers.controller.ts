import { Controller, Delete, Get, Post, Patch, Body } from '@nestjs/common';
import { HeadersService } from './headers.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateHeaderDto } from './dto/createHeader.dto';
import { GetUserHeaderDto } from './dto/getUserHeader.dto';
import { AddUrlToHeaderDto } from './dto/addUrlToHeader.dto';
import { headerModle } from 'src/entities/header.entities';
import { GetUserHeaderByIdDto } from './dto/getHeaderById.dto';
@ApiTags('headers')
@Controller('headers')
export class HeadersController {
  constructor(private readonly headerService: HeadersService) { }
  @ApiOperation({ summary: 'create header' })
  @Post('createHeader')
  createHeader(@Body() body: CreateHeaderDto) {
    return this.headerService.createHeader(body);
  }
  @ApiOperation({ summary: 'get all headers' })
  @Get('allHeaders')
  getAllHeaders() {
    return this.headerService.getAllHeaders();
  }
  @ApiOperation({ summary: 'get header by id' })
  @Post('getHeaderById')
  getHeaderById(@Body() body: GetUserHeaderByIdDto) {
    return this.headerService.getHeaderById(body);
  }
  @ApiOperation({ summary: 'add a url to a header' })
  @Post('addUrlToHeader')
  addUrlToHeader(@Body() body: AddUrlToHeaderDto) {
    return this.headerService.addUrlToHeader(body);
  }

  @ApiOperation({ summary: 'get header of a user  by send email' })
  @Post('userHeader')
  getUserHeaderByMail(@Body() body: GetUserHeaderDto) {
    return this.headerService.getUserHeaderByMail(body);
  }

  @ApiOperation({ summary: 'delete a header' })
  @Delete()
  deleteHeader() {
    return this.headerService.deleteHeader();
  }
  @ApiOperation({ summary: 'update header' })
  @Patch()
  updateHeader() {
    return this.headerService.updateHeader();
  }
}
