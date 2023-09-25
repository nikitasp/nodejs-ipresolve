import { Controller, Get, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { IplistService } from './iplist.service';
import { RedisService } from '../redis/redis.service'

@Controller('iplist')
export class IplistController {
  constructor(
    private readonly iplistService: IplistService,
    private readonly redisService: RedisService
  ) {}

  @Get('cache/:id')
  async findOneInCache(@Param('id') id: string) {
    return JSON.parse(await this.redisService.get(id))
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {

    const ipInfo = JSON.parse(await this.redisService.get(id))

    if (ipInfo) {
      return ipInfo
    }

    try {
      const res = await this.iplistService.resolveOne(id);

      if( res['success'] ) {
        const value = JSON.stringify(res);
        const ttlInSeconds = parseInt(process.env.REDIS_TTL, 10) || 60;

        await this.redisService.setWithTTL(id, value, ttlInSeconds);
      }

      return res
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.GATEWAY_TIMEOUT);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if (await this.redisService.delete(id)) {
      return {"success": true}
    }

    throw new HttpException({"success": false}, HttpStatus.NOT_FOUND);
  }
}
