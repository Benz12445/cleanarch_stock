import { RegisterMemberDto } from "../../../interfaces/dtos/memberDto";
import { InvalidParam } from "../../../interfaces/exceptions/InvalidParam";
import { NotFoundException } from "../../../interfaces/exceptions/NotFound";
import { IMemberRepository } from "../../../interfaces/repositories/memberRepository";
import { Member } from "../../entity/Member";
import { hash } from "bcrypt";
import moment from "moment";
import { v4 as uuid } from "uuid";

export class Register {
  constructor(private memberRepo: IMemberRepository) {}
  async execute(registerMemberData: RegisterMemberDto): Promise<void> {
    console.log(`reg`, registerMemberData);
    try {
      const existMemberData = await this.memberRepo.findByUsername(
        registerMemberData.username
      );
      console.log(`ex`, existMemberData);
      if (existMemberData) {
        throw new InvalidParam(`member already exists`);
      }

      const {
        username,
        firstname,
        lastname,
        password,
        display_name,
        dateOfBirth,
      } = registerMemberData;

      const salt = 10;
      const enc_pwd = await hash(password, salt);
      const uid = uuid();
      const newMember = new Member();
      newMember.username = username;
      newMember.firstName = firstname;
      newMember.lastName = lastname;
      newMember.uid = uid;
      newMember.displayName = display_name;
      newMember.dateOfBirth = dateOfBirth
        ? moment(dateOfBirth).format(`YYYY-MM-DD`)
        : new Date();
      newMember.password = enc_pwd;

      await this.memberRepo.save(newMember);
    } catch (error) {
      console.log(`error`, error);
      throw error;
    }
  }
}
