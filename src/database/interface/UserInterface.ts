// user.interface.ts
export type UserRole = 'admin' | 'user';

export interface UserType {
  name: string;
  email: string;
  role: UserRole;
}
