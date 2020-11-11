import { Response } from 'express';
import * as shortId from 'shortid';
import { Injectable } from '@nestjs/common';
import { ShortUrlRepository } from './short.repository';

@Injectable()
export class AppService {
  constructor(private readonly shortUrlRepository: ShortUrlRepository) {}

  async getData() {
    const urls = await this.shortUrlRepository.find();
    return urls;
  }

  async shortUrl(fullUrl: string) {
    console.log(fullUrl);
    const shortedUrl = await this.shortUrlRepository
      .create({
        OriginalUrl: fullUrl,
        ShortedUrl: await shortId.generate(),
      })
      .save();
    return shortedUrl;
  }

  async shortedUrl(shortedUrl: string, res: Response) {
    const found = await this.shortUrlRepository.findOneOrFail({
      ShortedUrl: shortedUrl,
    });
    found.clicks++;
    found.save();

    res.redirect(found.OriginalUrl);
  }
}
