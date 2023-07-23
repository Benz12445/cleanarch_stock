import { IProduct } from "../../../interfaces/entity/IProduct";
import { IProductRepository } from "../../../interfaces/repositories/productRepository";

export class GetProductById {
  constructor(private productRepository: IProductRepository) {}
  async execute(id: any): Promise<IProduct> {
    const product = await this.productRepository.findById(id);
    return product;
  }
}
