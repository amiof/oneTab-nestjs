import { Test, TestingModule } from '@nestjs/testing';
import { FavUrlsService } from './fav-urls.service';

describe('FavUrlsService', () => {
  let service: FavUrlsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavUrlsService],
    }).compile();

    service = module.get<FavUrlsService>(FavUrlsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
