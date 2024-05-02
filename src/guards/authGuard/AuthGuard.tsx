import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { ROUTES } from '@/router/constants';
import { checkIsAdmin, getAccessToken } from '@/utils';

interface AuthGuardProps {
  children: React.ReactElement;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const token = getAccessToken();

  const { pathname } = useLocation();

  const [requestedLocation, setRequestedLocation] = useState<string | null>(null);

  const isAdmin = checkIsAdmin(token);

  if (!token) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Navigate to={ROUTES.AUTH.ROOT} />;
  }

  if (!isAdmin) {
    return <Navigate to={ROUTES.AUTH.ROOT} />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return children;
};
