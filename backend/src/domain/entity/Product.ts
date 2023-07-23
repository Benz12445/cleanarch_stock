import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { IProduct } from "../../interfaces/entity/IProduct";

@Entity(`product`)
export class Product implements IProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uid: string;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "qty" })
  qty: number;

  @Column({ name: "price" })
  price: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt;
}
