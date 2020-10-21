import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ShortUrl } from '../../common/entities/shortUrl.entity';
import { environment } from '../../environments/environment';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortUrlRepository } from './short.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: environment.db_url,
      synchronize: true,
      entities: [ShortUrl],
    }),
    TypeOrmModule.forFeature([ShortUrlRepository]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
