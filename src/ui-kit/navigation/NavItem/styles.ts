import { theme } from '@/theme';

export const styles = {
  container: {
    height: '100vh',
    backgroundColor: theme.palette.primary.dark,
  },
  icon: {
    color: 'grey.A200',
  },
  list: {
    pl: 1.5,
  },
  listItem: {
    backgroundColor: theme.palette.grey[900],
    '&:hover': {
      backgroundColor: theme.palette.grey[800],
    },
    '&:focus': {
      backgroundColor: theme.palette.grey[800],
    },
  },
  listItemText: {
    color: 'white',
  },
} as const;
