import { Components, Theme } from '@mui/material';

export const components: Components<Omit<Theme, 'components'>> = {
  // example of container style overriding
  // for more details you can check https://mui.com/material-ui/customization/theme-components/
  MuiContainer: {
    styleOverrides: {
      root: {
        maxWidth: '100%',
        '&.MuiContainer-maxWidthLg': {
          maxWidth: '1680px',
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: '2px solid rgb(224, 224, 224)',
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        width: '100%',
        fontWeight: 500,
        borderRadius: 4,
        border: '1px solid rgba(165, 180, 203, 0.24)',
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          border: '0.3px solid #374C5E',
          borderRadius: 4,
        },
        '&.Mui-error .MuiOutlinedInput-notchedOutline': {
          borderWidth: '0.1px',
        },
        '.MuiOutlinedInput-notchedOutline': {
          borderWidth: '0.1px',
        },
        WebkitBoxShadow: '0 0 0 1000px white inset',
      },
      input: {
        WebkitBoxShadow: '0 0 0 1000px white inset',
      },
      multiline: {
        height: 'auto',
      },
    },
  },

  MuiFormHelperText: {
    styleOverrides: {
      root: {
        minHeight: 24,
        paddingBottom: 6,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontWeight: 'bold',
        '&.Mui-disabled': {
          cursor: 'not-allowed',
          pointerEvents: 'auto',
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        fontWeight: 'bold',
        '&.Mui-disabled': {
          cursor: 'not-allowed',
          pointerEvents: 'auto',
        },
      },
    },
  },
};
