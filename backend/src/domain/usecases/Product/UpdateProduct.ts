import { IProduct } from "../../../interfaces/entity/IProduct";
import { IProductRepository } from "../../../interfaces/repositories/productRepository";
import { Product } from "../../entity/Product";
import { v4 as uuid } from "uuid";

export class UpdateProduct {
  constructor(private productRepository: IProductRepository) {}
  async execute(productData: any): Promise<void> {
    const { name, price, qty } = productData;
    const uid = uuid();
    const newProduct = new Product();
    newProduct.name = name;
    newProduct.price = price;
    newProduct.qty = qty;
    newProduct.uid = uid;
    await this.productRepository.save(newProduct);
  }
}
