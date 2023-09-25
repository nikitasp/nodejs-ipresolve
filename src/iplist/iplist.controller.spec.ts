import { Test, TestingModule } from '@nestjs/testing';
import { IplistController } from './iplist.controller';
import { IplistService } from './iplist.service';

describe('IplistController', () => {
  let controller: IplistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IplistController],
      providers: [IplistService],
    }).compile();

    controller = module.get<IplistController>(IplistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
