import { useNavigate } from 'react-router-dom';

import { MockUsers } from '@/constants/env';
import { usePagination, useTableFilters } from '@/hooks';

import { filteringFields } from './constants';

export const useMainUserPage = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filters, onFiltersChange] = useTableFilters(filteringFields);
  const paginationParams = usePagination();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { page, rowsPerPage: limit } = paginationParams;

  const users = MockUsers;
  const isLoading = false;
  // commented for using mock data
  // let { data: users, isLoading } = useGetUsersQuery({
  //   limit,
  //   page: page + 1,
  //   ...filters,
  // });

  const count = (users?.meta?.totalPages ?? 1) * limit;

  const noData = !users?.items.length;

  const goToCreateUserPage = () => {
    navigate('create');
  };

  return {
    users,
    count,
    noData,
    isLoading,
    onFiltersChange,
    goToCreateUserPage,
    ...paginationParams,
  };
};
