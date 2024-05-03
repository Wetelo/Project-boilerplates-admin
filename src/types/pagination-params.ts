import type { ChangeEvent, MouseEvent } from 'react';

export interface IPaginationParams {
  page: number;
  count: number;
  rowsPerPage: number;
  onPageChange: (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  onRowsPerPageChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
