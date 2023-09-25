import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IplistService } from './iplist/iplist.service';
import { IplistModule } from './iplist/iplist.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [IplistModule, HttpModule],
  controllers: [AppController],
  providers: [AppService, IplistService],
})
export class AppModule {}
