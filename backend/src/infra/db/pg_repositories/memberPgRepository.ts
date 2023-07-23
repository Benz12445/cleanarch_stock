// export class pgRepositories
import { getRepository } from "typeorm";
import { IMemberRepository } from "../../../domain/interfaces/repositories/memberRepository";
import { Member } from "../../../domain/entity/Member";

export class MemberPgRepository implements IMemberRepository {
  async save(member: Member) {}
  async fin(member: Member) {}
}
