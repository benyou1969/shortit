import { EntityRepository, Repository } from 'typeorm';
import { ShortUrl } from '../../common/entities/shortUrl.entity';

@EntityRepository(ShortUrl)
export class ShortUrlRepository extends Repository<ShortUrl> {}
