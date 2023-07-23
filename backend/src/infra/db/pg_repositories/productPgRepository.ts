// export class pgRepositories
import { IMemberRepository } from "../../../interfaces/repositories/memberRepository";
import { Product } from "../../../domain/entity/Product";
import { AppDataSource } from "../dbConnection";
import { IProductRepository } from "../../../interfaces/repositories/productRepository";
import { IProduct } from "../../../interfaces/entity/IProduct";
import { IsNull } from "typeorm";

export class ProductPgRepository implements IProductRepository {
  async save(product: Product): Promise<Product> {
    const saveData = await AppDataSource.getRepository(Product).save(product);
    return saveData;
  }

  async find(): Promise<Product[]> {
    const productList = await AppDataSource.getRepository(Product).find();
    return productList;
  }

  async findById(id: number): Promise<Product> {
    const product = await AppDataSource.getRepository(Product).findOne({
      where: {
        id: id,
        deletedAt: IsNull(),
      },
    });
    return product;
  }

  async remove(id: number): Promise<void> {
    await AppDataSource.getRepository(Product).softDelete({
      id: id,
    });
  }
}
