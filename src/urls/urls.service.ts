import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import urlModel from 'src/entities/urls.entities';
import { Repository } from 'typeorm';
import { CreateUrlDto } from './dto/createUrl.dto';
import { UsersService } from 'src/users/users.service';
import { UpdateUrlDto } from './dto/updateUrl.dto';

@Injectable()
export class UrlsService {
  constructor(@InjectRepository(urlModel) private readonly urlsRepository: Repository<urlModel>,
    private readonly usersService: UsersService
  ) { }
  async getAllurls(): Promise<urlModel[] | string> {
    const urls = await this.urlsRepository.find({
      relations: ["user","fav"]
    })
    if (urls.length) return urls
    return "not url found"
  }
  async CreateUrl(createUrlDto: CreateUrlDto) {
    const { userEmail } = createUrlDto
    const user = await this.usersService.findUserByEmail(userEmail)
    if (user) {
      const url = await this.urlsRepository.create({ url: createUrlDto.url, title: createUrlDto.title, user })
      await this.urlsRepository.save(url)
      return url
    }
    return "userName is not valid "
  }

  async getUrlByid(id: string) {

    const url = await this.urlsRepository.findOne({ where: { id: id } ,relations:["user"]})
    return url
  }


  async deleteUrl(id: string) {
    const deleted = await this.urlsRepository.delete({ id: id })
    console.log(deleted)
    return deleted
  }

  async updateUrl(body: UpdateUrlDto) {
    const { urls, title, urlId,userName } = body
    const user =await this.usersService.findUserByUserName(userName)
    if (user && urls && title && urlId) {
      const url = await this.getUrlByid(urlId)
      url.title = title
      url.url = urls
      const updtedUrl = this.urlsRepository.save(url)
      return updtedUrl
    }

  }
}
