import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { AuthGuard, GuestGuard } from '@/guards';
import { AuthLayout, MainLayout } from '@/layouts';
import { SignIn } from '@/pages/SignIn';
import { ROUTES } from '@/router/constants';

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
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        { index: true, element: <MainUserPage /> },
        {
          path: ROUTES.USERS,
          element: <MainUserPage />,
        },
      ],
    },
    { path: '404', element: '' },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
