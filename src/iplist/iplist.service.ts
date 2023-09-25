import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class IplistService {
  constructor(
    private readonly httpService: HttpService
  ) {}

  async resolveOne(ip: string) {
    const res = await this.httpService.axiosRef.get('http://ipwho.is/' + ip);
    return res.data
  }
}
