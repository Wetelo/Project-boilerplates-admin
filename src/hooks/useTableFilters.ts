import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'throttle-debounce';

import type { FiltersChangeFunc, FiltersType, SortFilterChangeFunc } from '@/types';
import { TSortingFields } from '@/types/sorting';

type ObjectType = { [key: string]: string };

export const useTableFilters = (
  initialValues: FiltersType = [],
): [ObjectType, FiltersChangeFunc, SortFilterChangeFunc, string | undefined, boolean | undefined] => {
  const [filters, setFilters] = useState({});

  const [sortBy, setSortBy] = useState<string | undefined>(undefined);
  const [isOrderByAsc, setIsOrderByAsc] = useState<boolean | undefined>(undefined);

  const onSortingChange = (cellName: TSortingFields) => {
    setSortBy(cellName);
    setIsOrderByAsc((prevState) => {
      if (cellName === sortBy) {
        return !prevState;
      }
      return true;
    });
  };

  const updateInitialFilters = useCallback(() => {
    const obj: ObjectType = {};
    initialValues.forEach((value) => {
      if (value) {
        const { name, defaultValue } = value;
        obj[name] = defaultValue ?? '';
      }
    });
    setFilters(obj);
  }, [initialValues]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkIsFiltersDirty = () =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line array-callback-return,consistent-return
    Object.values(filters).reduce((res, filterValue) => {
      if (filterValue) {
        return true;
      }
    }, false);

  useEffect(() => {
    if (!checkIsFiltersDirty()) return;
    updateInitialFilters();
  }, [checkIsFiltersDirty, initialValues, updateInitialFilters]);

  const onChange: FiltersChangeFunc = useCallback((key, value) => {
    debounce(300, () => {
      setFilters((prev) => ({ ...prev, [key]: value }));
    })();
  }, []);

  return [filters, onChange, onSortingChange, sortBy, isOrderByAsc];
};

export default useTableFilters;
