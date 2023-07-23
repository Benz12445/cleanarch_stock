import { Router } from "express";
import { ProductController } from "../../interfaces/controllers/ProductController";

const productController = new ProductController();
const router = Router();
const route = "/";
const routeWithParam = "/:product_id";

router
  .route(route)
  .get((req, res) => productController.getProductList(req, res))
  .post((req, res) => productController.addProduct(req, res));

router
  .route(routeWithParam)
  .get((req, res) => productController.getProductById(req, res))
  .put((req, res) => productController.updateProduct(req, res))
  .delete((req, res) => productController.removeProduct(req, res));

export default router;
