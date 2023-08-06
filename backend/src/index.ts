import express from "express";
import productRouter from "./infra/routers/ProductRouter";
import memberRouter from "./infra/routers/MemberRouter";
import { AppDataSource } from "./infra/db/dbConnection";
import cors from "cors";
import { handleError } from "./infra/middlewares/globalErrorHandler";

const port = process.env.PORT || 3005;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/product", productRouter);
app.use("/api/auth", memberRouter);
app.use("/api", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "api is working",
  });
});
app.use(handleError);

AppDataSource.initialize().then(() => {
  app.listen(port, () => console.log(`app is listen on port ${port}`));
});
