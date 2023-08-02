import { Injectable } from '@nestjs/common';
import { AddFavDto } from './dto/addFav.dto';
import { UserUrlFavDto } from './dto/userUrlFav.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { favUlrsModle } from 'src/entities/fav.entities';
import { Repository } from 'typeorm';
import { UrlsService } from 'src/urls/urls.service';
import { UsersService } from 'src/users/users.service';

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
    const userUrls = user.urls;
    const favs = new favUlrsModle();
    let dataurls = favs.urls;
    if (!dataurls) dataurls = [];
    dataurls.push(url);
    favs.urls = dataurls;
    favs.user = user;
    const otherurls = await this.getAllUserFavUrl(user.email);
    console.log('otherurls', otherurls);
    otherurls.push({ ...url });
    const fav = await this.favUrlRepository.create({
      user: favs.user,
      urls: otherurls,
    });

    if (fav) await this.favUrlRepository.save(fav);
    console.log(fav);
    return fav;
  }
  async getAllUserFavUrl(email: string) {
    const user = await this.userServicea.findUserByEmail(email);
    console.log('user', user);
    const favs = await this.favUrlRepository.find({
      where: { user: user[0] },
      relations: ['urls'],
    });
    console.log(favs);
    return favs[0].urls;
  }

  getAuserFavs(userUrlFavDto: UserUrlFavDto) {}
async  getAllFav() {
    const allFavs = await this.favUrlRepository.find()
    return allFavs
  }
  async FindFavById(id: string) {
    const fav = await this.favUrlRepository.find({
      where: { id: id },
      relations: ['user', 'urls'],
    });
    return fav;
  }

  deleteUrlFromFav(id: string) {}
}
