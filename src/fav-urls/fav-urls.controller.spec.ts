import { Test, TestingModule } from '@nestjs/testing';
import { FavUrlsController } from './fav-urls.controller';

describe('FavUrlsController', () => {
  let controller: FavUrlsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavUrlsController],
    }).compile();

    controller = module.get<FavUrlsController>(FavUrlsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
