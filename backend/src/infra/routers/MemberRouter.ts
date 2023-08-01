import { Router } from "express";
import { MemberController } from "../../interfaces/controllers/MemberController";

const memberController = new MemberController();
const router = Router();

router.post(`/register`, (req, res, next) =>
  memberController.register(req, res).catch(next)
);
router.post(`/login`, (req, res, next) =>
  memberController.login(req, res).catch(next)
);

export default router;
