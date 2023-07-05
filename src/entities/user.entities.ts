import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export default class userModel {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true, nullable: false })
  email: string;
  @Column({ unique: false, nullable: false })
  last_name: string;
  @Column({ unique: false, nullable: false })
  first_name: string;
  @Column({  nullable: false })
  password: string;
  @Column({ unique: false, nullable: true })
  age: number;
  @Column({ unique: true, nullable: false })
  userName: string;
}
