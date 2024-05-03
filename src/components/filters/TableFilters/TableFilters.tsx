import type { SelectChangeEvent } from '@mui/material';
import { Box, MenuItem, Select, TableCell, TextField } from '@mui/material';
import type { ChangeEvent } from 'react';
import React, { memo, useCallback } from 'react';

import { DateFilter } from '@/components';
import { FiltersChangeFunc, FiltersType, FilterTypes } from '@/types';

interface ITableFiltersProps {
  filters: FiltersType;
  onChange: FiltersChangeFunc;
}

const TableFilters: React.FC<ITableFiltersProps> = memo(({ filters, onChange }) => {
  const onInputChange = useCallback(
    (filter: string) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
      onChange(filter, e.target.value);
    },
    // eslint-disable-next-line
    [filters],
  );

  return (
    // eslint-disable-next-line
    <>
      {filters?.map((filter, idx) => (
        // eslint-disable-next-line
        <TableCell key={idx}>
          {filter && (
            <>
              {filter.type === FilterTypes.Text && (
                <TextField
                  size="small"
                  fullWidth
                  placeholder={`Search by ${filter.name}`}
                  onChange={onInputChange(filter.name)}
                />
              )}
              {filter.type === FilterTypes.Select && (
                <Select
                  defaultValue={filter.defaultValue ?? ''}
                  size="small"
                  displayEmpty
                  onChange={onInputChange(filter.name)}
                >
                  <MenuItem value="">
                    <Box component="em">All</Box>
                  </MenuItem>
                  {filter?.values?.map(({ label, value }) => (
                    <MenuItem key={label} value={value.toString()}>
                      {label}
                    </MenuItem>
                  ))}
                </Select>
              )}
              {filter.type === FilterTypes.Date && <DateFilter filter={filter} onChange={onChange} />}
            </>
          )}
        </TableCell>
      ))}
    </>
  );
});

TableFilters.displayName = 'TableFilters';

export default TableFilters;
