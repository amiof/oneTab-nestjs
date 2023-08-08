import { BadRequestException, Injectable } from '@nestjs/common';
import { AddTagDto } from './dto/addTagDto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import tagModle from 'src/entities/tag.entities';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { FindTagDTo } from './dto/FindTag.DTo';
import userModel from 'src/entities/user.entities';
import { TagToUrlDto } from './dto/tagToUrl.dto';
import { UrlsService } from 'src/urls/urls.service';
import urlModel from 'src/entities/urls.entities';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(tagModle)
    private readonly TagRepository: Repository<tagModle>,
    private readonly userServic: UsersService,
    private readonly urlsService: UrlsService,
  ) { }

  async addTag(addTagDto: AddTagDto) {
    const { email } = addTagDto;
    const user = await this.userServic.findUserByEmail(email);
    if (user) {
      const tag = await this.TagRepository.create({
        TagName: addTagDto.TagName,
        user,
      });
      await this.TagRepository.save(tag);
      if (tag) return tag;
    }
  }
  async addTagToUrl(tagToUrlDto: TagToUrlDto) {
    const { tagId, urlId } = tagToUrlDto
    const tag: tagModle = await this.TagRepository.findOne({ where: { id: tagId } })
    const url: urlModel = await this.urlsService.getUrlByid(urlId)
    if (tag && url) {
      url.tag.push(tag)
      const saved = this.urlsService.saveUrlData(url)
      return saved
    }

  }
  async getUserTags(email: string) {

    const user: userModel | false = await this.userServic.findUserByEmail(
      email,
    )
    if (user) { return user.tags } else {

      throw new BadRequestException("user not Found");
    }
  }

  async findTagByName(body: FindTagDTo) {
    const { email, TagName } = body;
    const user: userModel | false = await this.userServic.findUserByEmail(
      email,
    );

    if (user) {
      console.log(user)
      const find = user.tags.some((tag) => tag.TagName == TagName);

      return { availableTag: find };
    } else {
      return 'user not found';
    }
  }

  async getAllTag() {
    const tags = await this.TagRepository.find({ relations: ['urls', 'user'] });
    return tags;
  }
  async removeTag(id: string) {
    const RemovedTag = await this.TagRepository.delete({ id: id })
    return RemovedTag
  }
}
