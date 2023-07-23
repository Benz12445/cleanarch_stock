import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
// import { IMember } from "../interfaces/entity/IMember";
import { IMember } from "../../interfaces/entity/IMember";

@Entity(`members`)
export class Member implements IMember {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uid: string;

  @Column({ name: "firstname" })
  firstName: string;

  @Column({ name: "lastname" })
  lastName: string;

  @Column({ name: "email" })
  email: string;

  @Column({ name: "display_name" })
  displayName: string;

  @Column({ name: "password" })
  password: string;

  @Column({ name: "dob" })
  dateOfBirth;

  @CreateDateColumn({ name: "created_at" })
  createdAt;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt;
}
