import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, BeforeInsert } from "typeorm";
import userModel from "./user.entities";

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
  @ManyToOne(() => userModel, (user) => user.url)
  user: userModel
}
