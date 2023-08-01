// export class pgRepositories
import { IMemberRepository } from "../../../interfaces/repositories/memberRepository";
import { Member } from "../../../domain/entity/Member";
import { AppDataSource } from "../dbConnection";
import { IsNull } from "typeorm";

export class MemberPgRepository implements IMemberRepository {
  async save(mem: Member): Promise<void> {
    await AppDataSource.getRepository(Member).save(mem);
  }

  async findByUsername(username: string): Promise<Member | null> {
    const memberData = await AppDataSource.getRepository(Member).findOne({
      where: {
        username: username,
        deletedAt: IsNull(),
      },
    });
    return memberData;
  }

  async findById(id: number): Promise<Member | null> {
    const memberData = await AppDataSource.getRepository(Member).findOne({
      where: {
        id: id,
        deletedAt: IsNull(),
      },
    });
    return memberData;
  }
}
