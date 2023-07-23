import { IProduct } from "../../../interfaces/entity/IProduct";
import { IProductRepository } from "../../../interfaces/repositories/productRepository";
import { Product } from "../../entity/Product";
import { v4 as uuid } from "uuid";

export class UpdateProduct {
  constructor(private productRepository: IProductRepository) {}
  async execute(productData: any): Promise<IProduct> {
    const { name, price, qty } = productData;
    const existProduct = await this.productRepository.findById(
      productData.productId
    );

    if (!existProduct) throw new Error(`product not found`);
    existProduct.name = name;
    existProduct.price = price;
    existProduct.qty = qty;
    const updateData = await this.productRepository.save(existProduct);
    return updateData;
  }
}
