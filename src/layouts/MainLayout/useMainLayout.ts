import type { MouseEvent } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/router';
import { useAppDispatch } from '@/store';
import { authSlice, selectAuthenticatedUserSelector } from '@/store/auth';

export const useMainLayout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectAuthenticatedUserSelector);

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onLogoutClick = () => {
    dispatch(authSlice.actions.logout());
    navigate(ROUTES.AUTH.ROOT);
  };

  return {
    user,
    mobileOpen,
    anchorElUser,
    onLogoutClick,
    handleDrawerToggle,
    handleOpenUserMenu,
    handleCloseUserMenu,
  };
};
