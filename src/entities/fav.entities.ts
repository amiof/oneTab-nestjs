import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import userModel from './user.entities';
import urlModel from './urls.entities';

@Entity('fav')
export class favUlrsModle {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @OneToOne(() => userModel, { cascade: true })
  @JoinColumn()
  user: userModel;
  @OneToMany(() => urlModel, (url) => url.fav)
  urls: urlModel[];
}
