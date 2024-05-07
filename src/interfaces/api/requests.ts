import { SortingOrderEnum } from '@/enums';

export interface ISignInRequest {
  email: string;
  password: string;
}

export interface IRequestParams {
  limit: number;
  page: number;
  sortBy?: string;
  order?: SortingOrderEnum;
}
