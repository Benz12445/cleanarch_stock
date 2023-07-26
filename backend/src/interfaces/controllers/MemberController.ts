import { Request, Response } from "express";
import { Login } from "../../domain/usecases/Member/LoginMember";
import { Register } from "../../domain/usecases/Member/RegisterMember";
import { MemberPgRepository } from "../../infra/db/pg_repositories/memberPgRepository";
import { LoginMemberDto, RegisterMemberDto } from "../dtos/memberDto";

export class MemberController {
  private memberRegisUseCase: Register;
  private memberLoginUseCase: Login;

  constructor() {
    const memberRepo = new MemberPgRepository();
    this.memberLoginUseCase = new Login(memberRepo);
    this.memberRegisUseCase = new Register(memberRepo);
  }

  async register(req: Request, res: Response) {
    try {
      const registerData = req.body as RegisterMemberDto;
      this.memberRegisUseCase.execute(registerData);

      return res.status(200).json({
        message: "register sucess",
      });
    } catch (error) {
      return res.status(500).json({
        message: "error",
        stack: error,
      });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const loginData = req.body as LoginMemberDto;
      const token = await this.memberLoginUseCase.execute(loginData);

      return res.status(200).json({
        message: "login sucess",
        data: token,
      });
    } catch (error) {
      return res.status(500).json({
        message: "error",
        stack: error,
      });
    }
  }
}
