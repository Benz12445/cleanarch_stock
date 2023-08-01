import { LoginMemberDto } from "../../../interfaces/dtos/memberDto";
import { IMemberRepository } from "../../../interfaces/repositories/memberRepository";
import { compareSync } from "bcrypt";
import { sign } from "jsonwebtoken";

export class Login {
  constructor(private memberRepo: IMemberRepository) {
    try {
      console.log(`login usecase`);
    } catch (error) {
      console.log(`error`);
    }
  }
  async execute(loginMemberData: LoginMemberDto): Promise<string> {
    try {
      const existMemberData = await this.memberRepo.findByUsername(
        loginMemberData.username
      );

      if (
        !existMemberData ||
        !compareSync(loginMemberData.password, existMemberData.password)
      ) {
        throw new Error(`invalid email or password `);
      }

      return sign(
        {
          id: existMemberData.uid,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "2d",
        }
      );
    } catch (error) {
      console.log(`error`);
      console.log(error);
    }
  }
}
