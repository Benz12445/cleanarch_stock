// import { IMember } from "../entity/IMember";
import { IProduct } from "../entity/IProduct";

export interface IProductRepository {
  save(product: IProduct): Promise<IProduct>;
  remove(id: number): Promise<void>;
  findById(id: number): Promise<IProduct | null>;
  find(): Promise<IProduct[] | null>;
}
