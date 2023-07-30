import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import userModel from "./user.entities";
import urlModel from "./urls.entities";

@Entity("tag")
export default class tagModle{
@PrimaryGeneratedColumn("uuid")
id:string
@Column({nullable:false})
TagName:string
@Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
CreateAt: Date
@ManyToOne(()=>userModel,(user)=>user.tags)
user:userModel
@OneToMany(()=>urlModel,(url)=>url.tag)
urls:urlModel[]
}
