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

export interface IMetaResponse {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface IResponse<T> {
  meta: IMetaResponse;
  items: T[];
}
