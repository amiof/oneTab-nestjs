import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import urlModel from 'src/entities/urls.entities';
import { Repository } from 'typeorm';

@Injectable()
export class UrlsService {
  constructor(@InjectRepository(urlModel) private readonly urlsRepository: Repository<urlModel>) { }
  getAllurls() { }
  getUrlByid() { }
  deleteUrl() { }
  updateUrl() { }
}
