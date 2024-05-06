import { drawerClasses } from '@mui/material';

export const drawerWidth = 250;

export const styles = {
  container: {
    display: 'flex',
  },
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    minWidth: 100,
  },
  appBar: {
    width: { lg: `calc(100% - ${drawerWidth}px)` },
    ml: { lg: `${drawerWidth}px` },
  },
  nav: {
    width: { lg: drawerWidth },
    flexShrink: { lg: 0 },
  },
  openDrawer: {
    mr: 2,
    display: { lg: 'none' },
  },
  main: {
    position: 'relative',
    flexGrow: 1,
    my: 2,
    px: { xs: 1, sm: 3 },
    py: 4,
    width: { xs: `calc(100% - ${drawerWidth}px)` },
    minHeight: '100vh',
    backgroundImage: "url('/assets/background.jpeg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  drawerMobile: {
    display: { xs: 'block', lg: 'none' },
    [`& .${drawerClasses.paper}`]: {
      boxSizing: 'border-box',
      width: drawerWidth,
    },
  },
  drawerDesktop: {
    display: { xs: 'none', lg: 'block' },
    [`& .${drawerClasses.paper}`]: {
      boxSizing: 'border-box',
      width: drawerWidth,
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    py: 1,
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  accountIcon: {
    color: 'blue',
    width: 30,
    height: 30,
  },
  menu: {
    mt: '45px',
  },
  menuAnchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
  menuTransformOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
} as const;
