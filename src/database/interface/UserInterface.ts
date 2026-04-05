// user.interface.ts
export type UserRole = 'seller' | 'buyer';

export interface UserType {
  name: string;
  email: string;
  role: UserRole;
}
