// src/index.ts

import express from "express";
import productRouter from "./infra/routers/ProductRouter";
import memberRouter from "./infra/routers/MemberRouter";
import { AppDataSource } from "./infra/db/dbConnection";

const port = process.env.PORT || 3005;
const app = express();

app.use(express.json());
app.use("/api/product", productRouter);
app.use("/api/auth", memberRouter);

AppDataSource.initialize().then(() => {
  app.listen(port, () => console.log(`app is listen on port ${port}`));
});
// ... rest of your server setup code
