// import { IMember } from "../entity/IMember";
import { IProduct } from "../entity/IProduct";

export interface IProductRepository {
  save(product: IProduct): Promise<void>;
  update(
    id: number,
    name: string,
    qty: number,
    price: number
  ): Promise<IProduct | null>;
  remove(id: number): Promise<void>;
  findById(id: number): Promise<IProduct | null>;
  find(): Promise<IProduct[] | null>;
}
