import { Router } from "express";
import { MemberController } from "../../interfaces/controllers/MemberController";

const router = Router();
const memberController = new MemberController();

router.post(`/register`, memberController.register);
router.post(`/login`, memberController.login);

export default router;
