import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { AuthGuard, GuestGuard } from '@/guards';
import { AuthLayout } from '@/layouts';
import { SignIn } from '@/pages/SignIn';
import { ROUTES } from '@/router/constants';

import Header from '../../components/header/Header';
import { MainUserPage } from '../../pages/Users';

export const AppRouter: React.FC = (): React.ReactElement | null =>
  useRoutes([
    {
      path: ROUTES.AUTH.ROOT,
      element: (
        <GuestGuard>
          <AuthLayout />
        </GuestGuard>
      ),
      children: [
        {
          path: ROUTES.AUTH.ROOT,
          element: <SignIn />,
        },
      ],
    },

    {
      path: ROUTES.HOME,
      element: (
        <AuthGuard>
          <div>AUTH</div>
        </AuthGuard>
      ),
      children: [
        {
          path: ROUTES.HOME,
          element: <div>HOME</div>,
        },
      ],
    },
    {
      path: ROUTES.USERS,
      element: (
        <GuestGuard>
          <div>
            <Header />
            <div>
              <MainUserPage />
              <div>Users (mock data*)</div>
            </div>
          </div>
        </GuestGuard>
      ),
    },
    { path: '404', element: '' },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
