import { useNavigate } from 'react-router-dom';

import { usePagination, useTableFilters } from '@/hooks';
import { useGetUsersQuery } from '@/services/users';

import { filteringFields } from './constants';

export const useMainUserPage = () => {
  const navigate = useNavigate();
  const [filters, onFiltersChange] = useTableFilters(filteringFields);
  const paginationParams = usePagination();
  const { page, rowsPerPage: limit } = paginationParams;

  const { data: users, isLoading } = useGetUsersQuery({
    limit,
    page: page + 1,
    ...filters,
  });

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
