// export class pgRepositories
import { IMemberRepository } from "../../../interfaces/repositories/memberRepository";
import { Member } from "../../../domain/entity/Member";
import { AppDataSource } from "../dbConnection";
import { IsNull } from "typeorm";

export class MemberPgRepository implements IMemberRepository {
  async save(mem: Member): Promise<void> {
    await AppDataSource.getRepository(Member).save(mem);
  }

  async findByEmail(email: string): Promise<Member | null> {
    const memberData = await AppDataSource.getRepository(Member).findOne({
      where: {
        email: email,
        deletedAt: IsNull(),
      },
    });
    if (!memberData) throw new Error(`member not found`);
    return memberData;
  }

  async findById(id: number): Promise<Member | null> {
    const memberData = await AppDataSource.getRepository(Member).findOne({
      where: {
        id: id,
        deletedAt: IsNull(),
      },
    });
    if (!memberData) throw new Error(`member not found`);
    return memberData;
  }
}
