import styled from '@emotion/styled';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Root = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const AuthLayout: FC = () => (
  <Root>
    <Outlet />
  </Root>
);
