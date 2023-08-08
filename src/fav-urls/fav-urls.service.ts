import { BadRequestException, Injectable } from '@nestjs/common';
import { AddFavDto } from './dto/addFav.dto';
import { UserUrlFavDto } from './dto/userUrlFav.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { favUlrsModle } from 'src/entities/fav.entities';
import { Repository } from 'typeorm';
import { UrlsService } from 'src/urls/urls.service';
import { UsersService } from 'src/users/users.service';
import urlModel from 'src/entities/urls.entities';

@Injectable()
export class FavUrlsService {
  constructor(
    @InjectRepository(favUlrsModle)
    private favUrlRepository: Repository<favUlrsModle>,
    private urlsService: UrlsService,
    private userServicea: UsersService,
  ) {}
  async addToFav(addFav: AddFavDto) {
    const url = await this.urlsService.getUrlByid(addFav.urlId);
    const user = url.user;
    const userSearch = await this.userServicea.findUserByEmail(user.email);
    let favIdUser: string | null;
    if (userSearch) {
      favIdUser = userSearch.fav.id;
    } else {
      throw new BadRequestException('this user not available');
    }
    if (favIdUser) {
      const existFav = await this.FindFavById(favIdUser);
      existFav[0].urls.push(url);
      await this.favUrlRepository.save(existFav);
      const Fav = await this.FindFavById(favIdUser);
      return Fav;
    } else {
      const favs = new favUlrsModle();
      let dataurls: urlModel[];
      if (!favs.urls.length) dataurls = [];
      dataurls.push(url);
      favs.urls = dataurls;
      favs.user = user;
      // console.log('otherurls', otherurls);
      const fav = await this.favUrlRepository.create({
        user: favs.user,
        urls: dataurls,
      });
      userSearch.fav = fav;
      await this.userServicea.saveProfile(userSearch);
      // console.log(savedUser);
      // if (fav) await this.favUrlRepository.save(fav);
      // console.log(fav);
      return fav;
    }
  }
  async getFavUserByEmail(email: string): Promise<urlModel[]> {
    const user = await this.userServicea.findUserByEmail(email);
    // console.log('user', user);
    const favs = await this.favUrlRepository.find({
      where: { user: user[0] },
      relations: ['urls', 'user'],
    });
    console.log(favs);
    return favs[0].urls;
  }

  getAuserFavs(_userUrlFavDto: UserUrlFavDto): void {}
  async getAllFav(): Promise<favUlrsModle[]> {
    const allFavs = await this.favUrlRepository.find();
    return allFavs;
  }
  async FindFavById(id: string):Promise<favUlrsModle[]> {
    const fav = await this.favUrlRepository.find({
      where: { id: id },
      relations: ['urls', 'user'],
    });
    return fav;
  }

  async deleteUrlFromFav(id: string) {
    const url = await this.urlsService.getUrlByid(id);
    const user = url.user;
    const userSearch = await this.userServicea.findUserByEmail(user.email);
    if (userSearch) {
      const favIdUser = userSearch.fav.id;
      const existFav = await this.FindFavById(favIdUser);
      const filterData = existFav[0].urls.filter(
        (FavurlObj) => FavurlObj.id !== id,
      );
      existFav[0].urls = filterData;
      const saveData = await this.favUrlRepository.save(existFav);
      return saveData;
    } else {
      throw new BadRequestException('this user not available');
    }
  }
}
