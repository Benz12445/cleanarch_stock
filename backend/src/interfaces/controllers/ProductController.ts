import { Request, Response } from "express";
import { AddProduct } from "../../domain/usecases/Product/AddProduct";
import { RemoveProduct } from "../../domain/usecases/Product/RemoveProduct";
import { UpdateProduct } from "../../domain/usecases/Product/UpdateProduct";
import { ProductPgRepository } from "../../infra/db/pg_repositories/productPgRepository";
import { AddProductDto, UpdateProductDto } from "../dtos/productDto";
import { GetProductList } from "../../domain/usecases/Product/GetProductList";
import { GetProductById } from "../../domain/usecases/Product/GetProductById";

export class ProductController {
  private addProductUseCase: AddProduct;
  private updateProductUseCase: UpdateProduct;
  private removeProductUseCase: RemoveProduct;
  private getProductListUseCase: GetProductList;
  private getProductByIdUseCase: GetProductById;

  constructor() {
    const productRepo = new ProductPgRepository();
    this.addProductUseCase = new AddProduct(productRepo);
    this.updateProductUseCase = new UpdateProduct(productRepo);
    this.removeProductUseCase = new RemoveProduct(productRepo);
    this.getProductListUseCase = new GetProductList(productRepo);
    this.getProductByIdUseCase = new GetProductById(productRepo);
  }

  async addProduct(req: Request, res: Response) {
    try {
      const prodData = req.body as AddProductDto;
      console.log(`prodData`, prodData);
      this.addProductUseCase.execute(prodData);

      return res.status(200).json({
        message: "product created",
      });
    } catch (error) {
      return res.status(500).json({
        message: "error",
        stack: error,
      });
    }
  }

  async updateProduct(req: Request, res: Response) {
    const { product_id } = req.params;

    const prodData = req.body as UpdateProductDto;
    prodData.id = parseInt(product_id);
    const update_data = await this.updateProductUseCase.execute(prodData);

    return res.status(200).json({
      message: "product update",
      data: update_data,
    });
  }

  async removeProduct(req: Request, res: Response) {
    const { product_id } = req.params;

    await this.removeProductUseCase.execute(parseInt(product_id));

    return res.status(200).json({
      message: "product remove",
    });
  }

  async getProductById(req: Request, res: Response) {
    const { product_id } = req.params;

    const update_data = await this.getProductByIdUseCase.execute(
      parseInt(product_id)
    );

    return res.status(200).json({
      message: "get product",
      data: update_data,
    });
  }

  async getProductList(req: Request, res: Response) {
    try {
      const list = await this.getProductListUseCase.execute({});
      console.log(this.getProductListUseCase);
      return res.status(200).json({
        message: "get product list",
        data: list,
      });
    } catch (error) {
      console.log(this.getProductListUseCase);
      console.log(`error`, error);
      return res.status(500).json({
        message: "get product list",
        stack: error,
      });
    }
  }
}
