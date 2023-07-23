import { RegisterMemberDto } from "../../../interfaces/dtos/memberDto";
import { IMemberRepository } from "../../../interfaces/repositories/memberRepository";
import { Member } from "../../entity/Member";
import { hash } from "bcrypt";

export class Register {
  constructor(private memberRepo: IMemberRepository) {}
  async execute(registerMemberData: RegisterMemberDto): Promise<void> {
    const existMemberData = await this.memberRepo.findByEmail(
      registerMemberData.email
    );

    if (existMemberData) {
      throw new Error(`member already exists`);
    }

    const { email, firstName, lastName, password, displayName, dateOfBirth } =
      registerMemberData;

    const salt = 10;
    const enc_pwd = await hash(password, salt);

    const newMember = new Member();
    newMember.email = email;
    newMember.firstName = firstName;
    newMember.lastName = lastName;
    newMember.displayName = displayName;
    newMember.dateOfBirth = dateOfBirth;
    newMember.password = enc_pwd;

    await this.memberRepo.save(newMember);
  }
}
