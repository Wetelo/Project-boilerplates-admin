import type { SxProps } from '@mui/material';
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
} from '@mui/material';
import React, { memo } from 'react';

import { TableFilters } from '@/components';
import { SortingOrderEnum } from '@/enums/sorting/sortingOrder';
import { IPaginationParams } from '@/interfaces';
import { FiltersChangeFunc, FiltersType, sortingFields, TSortingFields } from '@/types';

import { styles } from './styles';

interface ICustomTable extends IPaginationParams {
  hideFilters?: boolean;
  deletingModal?: React.FC;
  children: React.ReactNode;
  filteringFields?: FiltersType;
  onFiltersChange?: FiltersChangeFunc;
  onSortingChange?: (cellName: TSortingFields) => void;
  sx?: SxProps;
  headCells: { title: string; width?: number | string }[];
  noData: boolean;
  isLoading: boolean;
  sortBy?: string;
  isOrderByAsc?: boolean;
}

const CustomTable = memo(
  ({
    noData,
    deletingModal: DeletingModal,
    isLoading,
    children,
    headCells,
    filteringFields,
    hideFilters,
    onFiltersChange,
    onSortingChange,
    sortBy,
    isOrderByAsc,
    sx = {},
    ...paginationParams
  }: ICustomTable) => {
    const showFilters = !hideFilters && filteringFields && onFiltersChange;

    return (
      <>
        <Box sx={styles.tableWrapper}>
          <TableContainer component={Paper} sx={{ ...styles.tableContainer, ...sx }}>
            <Table sx={styles.table}>
              <TableHead>
                <TableRow>
                  {headCells.map(({ title, ...params }) => (
                    <TableCell {...params} key={title}>
                      {Object.keys(sortingFields).includes(title) && onSortingChange ? (
                        <Button
                          type="button"
                          variant="text"
                          onClick={() =>
                            onSortingChange(sortingFields[title as TSortingFields] as unknown as TSortingFields)
                          }
                        >
                          <TableSortLabel
                            active={(sortingFields[title as TSortingFields] as unknown as TSortingFields) === sortBy}
                            hideSortIcon={
                              (sortingFields[title as TSortingFields] as unknown as TSortingFields) !== sortBy
                            }
                            direction={isOrderByAsc ? SortingOrderEnum.ASC : SortingOrderEnum.DESC}
                          >
                            {title}
                          </TableSortLabel>
                        </Button>
                      ) : (
                        title
                      )}
                    </TableCell>
                  ))}
                </TableRow>
                {showFilters && (
                  <TableRow>
                    <TableFilters filters={filteringFields} onChange={onFiltersChange} />
                  </TableRow>
                )}
              </TableHead>
              <TableBody>
                {noData || isLoading ? (
                  <TableRow>
                    <TableCell colSpan={8}>
                      <Box sx={styles.emptyData}>
                        {!isLoading && noData && <Typography variant="h5">There no any data</Typography>}
                        {isLoading && <CircularProgress />}
                      </Box>
                    </TableCell>
                  </TableRow>
                ) : (
                  // eslint-disable-next-line
                  <>{children}</>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <TablePagination component={Paper} {...paginationParams} />
        {DeletingModal && <DeletingModal />}
      </>
    );
  },
);

CustomTable.displayName = 'CustomTable';

export default CustomTable;
