import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import userModel from "./user.entities";
import tagModle from "./tag.entities";
import { favUlrsModle } from "./fav.entities";
import { headerModle } from "./header.entities";

@Entity("url")
export default class urlModel {
  @PrimaryGeneratedColumn("uuid")
  id: string
  @Column({ nullable: false })
  url: string
  @Column({ nullable: true })
  title: string
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  CreateAt: Date
  // @BeforeInsert()
  // setCreateAt() {
  //   this.CreateAt = new Date()
  // }
  @ManyToOne(() => userModel, (user) => user.urls)
  user: userModel
  @ManyToMany(()=>tagModle,(tag)=>tag.urls)
  tag:tagModle[]
  @ManyToOne(()=>favUlrsModle,(favUrls)=>favUrls.urls)
  fav:favUlrsModle
  @ManyToMany(()=>headerModle,(header)=>header.urls)
  header:headerModle[]
}
