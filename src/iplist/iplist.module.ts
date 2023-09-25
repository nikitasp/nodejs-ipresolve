import { Module } from '@nestjs/common';
import { IplistService } from './iplist.service';
import { IplistController } from './iplist.controller';
import { HttpModule } from '@nestjs/axios';
import { RedisService } from '../redis/redis.service';

@Module({
  imports: [HttpModule],
  controllers: [IplistController],
  providers: [IplistService, RedisService]
})
export class IplistModule {}
