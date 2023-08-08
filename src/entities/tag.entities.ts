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

@Entity('tag')
export default class tagModle {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ nullable: false })
  TagName: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  CreateAt: Date;
  @ManyToOne(() => userModel, (user) => user.tags)
  user: userModel;
  @ManyToMany(() => urlModel, (url) => url.tag)
   @JoinTable({
    name: 'tag_url',
    joinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'url_id',
      referencedColumnName: 'id',
    },
  })
  urls: urlModel[];
}
