import { IProduct } from "../../../interfaces/entity/IProduct";
import { IProductRepository } from "../../../interfaces/repositories/productRepository";
import { Product } from "../../entity/Product";
import { v4 as uuid } from "uuid";

export class GetProductList {
  constructor(private productRepository: IProductRepository) {}
  async execute(filter: any): Promise<IProduct[]> {
    const productList = await this.productRepository.find();
    return productList;
  }
}
