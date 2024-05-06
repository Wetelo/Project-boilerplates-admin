import { UserRoleEnum } from '@/enums';

export interface ISignInResponse {
  token: string;
  user: IUserResponse;
}

export interface IUserResponse {
  id: number;
  email: string;
  role: UserRoleEnum;
  firstName?: string;
  lastName?: string;
}
