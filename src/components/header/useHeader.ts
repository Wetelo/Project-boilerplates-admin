import type { MouseEvent } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { MockUsers } from '@/constants/env';
import { logout } from '@/store/auth';

export const useHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // todo: get auth user from api
  const user = MockUsers.items[0];
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
    navigate('/sign-in');
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
