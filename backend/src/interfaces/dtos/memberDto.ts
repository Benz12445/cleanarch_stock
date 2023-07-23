export interface LoginMemberDto {
  email: string;
  password: string;
}

export interface RegisterMemberDto {
  uid?: string;
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  createdAt: string;
  updatedAt: string;
}
