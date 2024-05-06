import { Box, CssBaseline, Drawer } from '@mui/material';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Sidebar } from '@/components';
import { theme } from '@/theme';

import { styles } from './styles';
import { useMainLayout } from './useMainLayout';

export const MainLayout: FC = () => {
  const { mobileOpen, handleDrawerToggle } = useMainLayout();

  return (
    <Box sx={styles.container}>
      <CssBaseline />
      <Header handleOpenMobileNav={handleDrawerToggle} />
      <Box component="nav" sx={styles.nav} aria-label="mailbox folders">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={styles.drawerMobile}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{ sx: { backgroundColor: theme.palette.primary.main } }}
        >
          <Sidebar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={styles.drawerDesktop}
          PaperProps={{ sx: { backgroundColor: theme.palette.primary.main } }}
          open
        >
          <Sidebar />
        </Drawer>
      </Box>
      <Box component="main" sx={styles.main}>
        <Box mt={6}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
