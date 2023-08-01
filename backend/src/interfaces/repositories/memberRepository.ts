import { IMember } from "../entity/IMember";

export interface IMemberRepository {
  save(member: IMember): Promise<void>;
  findByUsername(email: string): Promise<IMember | null>;
  findById(id: number): Promise<IMember | null>;
}
