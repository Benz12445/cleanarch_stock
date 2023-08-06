import { Request, Response } from "express";
import { JsonWebTokenError } from "jsonwebtoken";
import { NotFoundException } from "../../interfaces/exceptions/NotFound";
import { InvalidParam } from "../../interfaces/exceptions/InvalidParam";

const sendErrorDev = (error: any, req: Request, res: Response) => {
  console.log(`middleware`);
  console.log(error);
  console.log(error instanceof InvalidParam);
  if (error instanceof NotFoundException) {
    return res.status(404).json({
      status: `error`,
      message: "not found",
      stack: error.stack,
    });
  } else if (error instanceof InvalidParam) {
    return res.status(400).json({
      status: `error`,
      message: "invalid parameters",
      stack: error.stack,
    });
  } else {
    return res.status(500).json({
      status: `error`,
      message: "cannot process request",
      stack: error.stack,
    });
  }
};

const sendErrorProd = (error: Error, req: Request, res: Response) => {
  return res.status(500).json({
    status: `error`,
    message: "cannot process request",
    stack: error.stack,
  });
};

export const handleError = (error: any, req: Request, res: Response, next) => {
  if (process.env.NODE_ENV === "production") {
    console.log(`render error for prod`);
    sendErrorProd(error, req, res);
  } else {
    console.log(`render error for dev`);
    sendErrorDev(error, req, res);
  }

  next();
};
