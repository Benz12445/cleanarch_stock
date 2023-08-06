import { LoginMemberDto } from "../../../interfaces/dtos/memberDto";
import { InvalidParam } from "../../../interfaces/exceptions/InvalidParam";
import { IMemberRepository } from "../../../interfaces/repositories/memberRepository";
import { compareSync } from "bcrypt";
import { sign } from "jsonwebtoken";

export class Login {
  constructor(private memberRepo: IMemberRepository) {}
  async execute(loginMemberData: LoginMemberDto): Promise<string> {
    try {
      const existMemberData = await this.memberRepo.findByUsername(
        loginMemberData.username
      );

      if (
        !existMemberData ||
        !compareSync(loginMemberData.password, existMemberData.password)
      ) {
        throw new InvalidParam(`invalid email or password `);
      }

      return sign(
        {
          id: existMemberData.uid,
        },
        process.env.JWT_SECRET ?? "test",
        {
          expiresIn: "2d",
        }
      );
    } catch (error) {
      console.log(`error`);
      console.log(error);
      throw error;
    }
  }
}
