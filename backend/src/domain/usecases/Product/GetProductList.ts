import { IProduct } from "../../../interfaces/entity/IProduct";
import { IProductRepository } from "../../../interfaces/repositories/productRepository";

export class GetProductList {
  constructor(private productRepository: IProductRepository) {}
  async execute(filter: any): Promise<IProduct[]> {
    const productList = await this.productRepository.find();
    return productList;
  }
}
