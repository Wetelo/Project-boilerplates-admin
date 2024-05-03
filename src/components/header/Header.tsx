import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Box, CssBaseline, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';

import { stringAvatar } from '@/utils';

import { styles } from './styles';
import { useHeader } from './useHeader';

const Header: FC<{ title?: string }> = ({ title }) => {
  const { user, anchorElUser, onLogoutClick, handleDrawerToggle, handleOpenUserMenu, handleCloseUserMenu } =
    useHeader();
  return (
    <Box sx={styles.container}>
      <CssBaseline />
      <AppBar position="fixed" sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          <Box sx={styles.title}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={styles.openDrawer}
            >
              <MenuIcon color="primary" />
            </IconButton>
            <Typography variant="h4">{title}</Typography>
          </Box>
          <IconButton onClick={handleOpenUserMenu} size="large">
            <Avatar {...stringAvatar(`${user?.firstName} ${user?.lastName}`)} />
          </IconButton>
          <Menu
            sx={styles.menu}
            anchorEl={anchorElUser}
            anchorOrigin={styles.menuAnchorOrigin}
            keepMounted
            transformOrigin={styles.menuTransformOrigin}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={onLogoutClick}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
