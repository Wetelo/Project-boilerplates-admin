import { Palette } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

/* You can customize typography params using typography
https://mui.com/material-ui/customization/palette/
*/
export const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
  fontFamily: '"Source Sans Pro", sans-serif',
  h1: {
    fontWeight: 700,
    color: '#111111',
    fontSize: 72,
    fontFamily: 'Source Sans Pro',
  },
  h2: {
    fontWeight: 700,
    color: '#111111',
    fontSize: 56,
    fontFamily: 'Source Sans Pro',
  },
  h3: {
    color: '#111111',
    fontSize: 32,
    fontWeight: 700,
    fontFamily: 'Source Sans Pro',
  },
  h4: {
    fontSize: 24,
    color: '#111111',
    fontWeight: 600,
    fontFamily: 'Source Sans Pro',
  },
  h5: {
    fontSize: 18,
    color: '#111111',
    fontWeight: 600,
    fontFamily: 'Source Sans Pro',
  },
  h6: {
    fontSize: 14,
    color: '#193547',
    fontWeight: 600,
    fontFamily: 'Source Sans Pro',
  },
  button: {
    textTransform: 'initial',
    fontWeight: 500,
    letterSpacing: 0,
    fontFamily: 'Source Sans Pro',
    fontSize: '0.875rem',
    lineHeight: 1.75,
  },
  subtitle1: {
    fontSize: '1.125rem',
    lineHeight: 1.3333333333333333,
    letterSpacing: 0,
    fontWeight: 500,
    fontFamily: 'Source Sans Pro',
  },
  body1: {
    fontSize: 14,
    lineHeight: 1.5,
    letterSpacing: 0,
    fontFamily: 'Source Sans Pro',
    fontWeight: 400,
  },
  body2: {
    fontSize: 12,
    color: '#111111',
    fontWeight: 500,
    fontFamily: 'Source Sans Pro',
  },
  caption: {
    display: 'inline-block',
    fontSize: '0.75rem',
    lineHeight: 1.5,
    letterSpacing: 0,
    fontWeight: 700,
    fontFamily: 'Source Sans Pro',
  },
  subtitle2: {
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.57,
  },
  overline: {
    fontFamily: 'Source Sans Pro',
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 2.66,
    textTransform: 'uppercase',
  },
};
