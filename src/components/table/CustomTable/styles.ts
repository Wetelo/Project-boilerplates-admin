import { theme } from '@/theme';

export const styles = {
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  },
  tableWrapper: {
    width: '100%',
    overflowX: 'scroll',
  },
  tableContainer: {
    mt: 4,
    width: {
      xl: '100%',
      lg: 'calc(100vw - 24px)',
    },
  },
  table: {
    width: {
      lg: '100%',
      md: 'max-content',
      xs: 'max-content',
    },
  },
  emptyData: {
    width: '100%',
    textAlign: 'center',
    p: 2,
  },
} as const;
