import { IsString, IsUrl } from 'class-validator';
import { Column, Entity, Unique } from 'typeorm';
import * as shortId from 'shortid';

import { GenericEntity } from './generic.entity';

@Entity('urls')
@Unique(['ShortedUrl'])
export class ShortUrl extends GenericEntity {
  @Column({ nullable: false })
  @IsString()
  @IsUrl()
  OriginalUrl: string;

  @Column({ default: shortId.generate() })
  ShortedUrl: string;

  @Column({ default: 0 })
  clicks: number;
}
