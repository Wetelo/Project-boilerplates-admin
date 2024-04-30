import { createTheme } from '@mui/material/styles';

import { components } from './components';
import { palette } from './palette';
import { shadows } from './shadows';
import { typography } from './typography';

export type Theme = typeof theme;

const baseTheme = createTheme({
  /*
  You can customize breakpoints using keys/values below
  for more details check documentation https://mui.com/material-ui/customization/breakpoints/
  */
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 640,
      md: 920,
      lg: 1090,
      xl: 1440,
    },
  },
});

export const theme = createTheme(baseTheme, {
  components,
  palette,
  typography,
  shadows,
});
