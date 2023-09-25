import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService {
  private readonly redisClient: Redis;

  constructor() {
    this.redisClient = new Redis({
      host: process.env.REDIS_HOST || 'redis',
      port: parseInt(process.env.REDIS_PORT, 10) || 6379,
    });
  }

  async setWithTTL(key: string, value: string, ttl: number): Promise<void> {
    await this.redisClient.set(key, value, 'EX', ttl);
  }

  async get(key: string): Promise<string | null> {
    return this.redisClient.get(key);
  }

  async delete(key: string): Promise<number> {
    return this.redisClient.del(key);
  }
}