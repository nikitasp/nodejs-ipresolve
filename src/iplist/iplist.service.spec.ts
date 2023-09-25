import { Test, TestingModule } from '@nestjs/testing';
import { IplistService } from './iplist.service';

describe('IplistService', () => {
  let service: IplistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IplistService],
    }).compile();

    service = module.get<IplistService>(IplistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
