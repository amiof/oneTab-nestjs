import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { headerModle } from 'src/entities/header.entities';
import { Repository } from 'typeorm';
import { CreateHeaderDto } from './dto/createHeader.dto';
import { UsersService } from 'src/users/users.service';
import { GetUserHeaderDto } from './dto/getUserHeader.dto';
import { AddUrlToHeaderDto } from './dto/addUrlToHeader.dto';
import { UrlsService } from 'src/urls/urls.service';
import { GetUserHeaderByIdDto } from './dto/getHeaderById.dto';
//FIXME: in createHeader need use check type for create
@Injectable()
export class HeadersService {
  constructor(
    @InjectRepository(headerModle)
    private readonly headerRepository: Repository<headerModle>,
    private readonly usersService: UsersService,
    private readonly urlsService: UrlsService,
  ) { }
  async createHeader(body: CreateHeaderDto) {
    const { headerName, userEmail } = body;
    const user = await this.usersService.findUserByEmail(userEmail);
    if (!user) throw new BadRequestException('this user not found');
    const createHeader = await this.headerRepository.create({
      user,
      headerName,
    });
    await this.headerRepository.save(createHeader);
    console.log(createHeader);
    return createHeader;
  }
  async getAllHeaders() {
    const allHeaders = await this.headerRepository.find({
      relations: ['user', "urls"],
    });
    return allHeaders;
  }

  async addUrlToHeader({ headerId, urlId }: AddUrlToHeaderDto) {
    const header = await this.headerRepository.findOne({
      where: { id: headerId }, relations: ["urls", "user"]
    });
    const url = await this.urlsService.getUrlByid(urlId);
    if (!header) throw new BadRequestException("this header is not available")
    if (!url) throw new BadRequestException("this url is not available")
    // console.log(url)
    let headerUrls = header.urls
    if (!headerUrls) { headerUrls = [] }

    // let headerUrls=header.urls
    headerUrls.push(url)
    // console.log(header)
    const urlAdded = await this.headerRepository.save(header);
    return urlAdded;
  }
  addListUrlInHeader() { }
  async getHeaderById(body: GetUserHeaderByIdDto) {
    const { headerId } = body
    const header = await this.headerRepository.findOne({ where: { id: headerId }, relations: ["user", "urls"] })
    return header
  }
  async getUserHeaderByMail(body: GetUserHeaderDto) {
    const { userEmail } = body;
    const user = await this.usersService.findUserByEmail(userEmail)
    if (!user) throw new BadRequestException("this user not available")
    const userHeader: headerModle[] = user.headersUrls
    return userHeader

  }
  deleteHeader() { }
  updateHeader() { }
}
