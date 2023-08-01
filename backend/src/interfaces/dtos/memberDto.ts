export interface LoginMemberDto {
  username: string;
  password: string;
}

export interface RegisterMemberDto {
  uid?: string;
  firstname: string;
  lastname: string;
  display_name: string;
  username: string;
  password: string;
  dateOfBirth: string;
}
