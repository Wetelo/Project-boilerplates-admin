import { SortingOrderEnum } from '@/enums/sorting/sortingOrder';

export interface IRequestParams {
  limit: number;
  page: number;
  sortBy?: string;
  order?: SortingOrderEnum;
}
