import type { MouseEvent } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/router';
import { logout, selectAuthenticatedUserSelector } from '@/store/auth';

export const useHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // todo: get auth user from api
  const user = useSelector(selectAuthenticatedUserSelector);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onLogoutClick = () => {
    dispatch(logout());
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
