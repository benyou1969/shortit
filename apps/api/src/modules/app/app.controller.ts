import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getData() {
    return await this.appService.getData();
  }

  @Post('/short')
  async shortUrl(@Body('fullUrl') fullUrl: string) {
    return this.appService.shortUrl(fullUrl);
  }

  @Get('/:shortedUrl')
  async getShortUrl(
    @Param('shortedUrl') shortedUrl: string,
    @Res() res: Response
  ) {
    return this.appService.shortedUrl(shortedUrl, res);
  }
}
