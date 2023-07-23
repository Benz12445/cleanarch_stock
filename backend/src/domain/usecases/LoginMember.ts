import { LoginMemberDto } from "../../interfaces/dtos/loginMemberDto";
import { IMemberRepository } from "../../interfaces/repositories/memberRepository";
import { compareSync } from "bcrypt";
import { sign } from "jsonwebtoken";

export class Login {
  constructor(private memberRepo: IMemberRepository) {}
  async execute(loginMemberData: LoginMemberDto): Promise<string> {
    const existMemberData = await this.memberRepo.findByEmail(
      loginMemberData.email
    );

    if (
      existMemberData.deletedAt != null ||
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
  }
}
