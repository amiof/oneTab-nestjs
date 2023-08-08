import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import userModel from './user.entities';
import urlModel from './urls.entities';

@Entity('header')
export class headerModle {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ nullable: false })
  headerName: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  CreateAt: Date;
  @ManyToOne(() => userModel, (user) => user.headersUrls)
  user: userModel;
  @ManyToMany(() => urlModel, (url) => url.header)
  @JoinTable({
    name: 'header_url',
    joinColumn: {
      name: 'headerUrlsModle_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'urlModel_id',
      referencedColumnName: 'id',
    },
  })
  urls: urlModel[];
}
