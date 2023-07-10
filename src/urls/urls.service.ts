import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import urlModel from 'src/entities/urls.entities';
import { Repository } from 'typeorm';
import { CreateUrlDto } from './dto/createUrl.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class UrlsService {
  constructor(@InjectRepository(urlModel) private readonly urlsRepository: Repository<urlModel>,
    private readonly usersService: UsersService
  ) { }
  async getAllurls(): Promise<urlModel[] | string> {
    const urls = await this.urlsRepository.find({
      relations:["user"]
    })
    if (urls.length) return urls
    return "not url found"
  }
  async CreateUrl(createUserDto: CreateUrlDto) {
    const { userEmail } = createUserDto
    const user = await this.usersService.findUserByEmail(userEmail)
    if (user) {
      const url = await this.urlsRepository.create({ url: createUserDto.url, title: createUserDto.title, user })
      await this.urlsRepository.save(url)
      return url
    }
    return "userName is not valid "
  }

  getUrlByid() { }
  deleteUrl() { }
  updateUrl() { }
}
