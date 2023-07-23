import { IProduct } from "../../../interfaces/entity/IProduct";
import { IProductRepository } from "../../../interfaces/repositories/productRepository";
import { Product } from "../../entity/Product";
import { v4 as uuid } from "uuid";

export class RemoveProduct {
  constructor(private productRepository: IProductRepository) {}
  async execute(productData: any): Promise<void> {
    const { id } = productData;
    await this.productRepository.remove(id);
  }
}
