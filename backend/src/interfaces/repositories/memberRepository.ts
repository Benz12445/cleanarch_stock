import { IMember } from "../entity/IMember";

export interface IMemberRepository {
  save(member: IMember): Promise<void>;
  findByEmail(email: string): Promise<IMember | null>;
  findById(id: number): Promise<IMember | null>;
}
