import { UserRoleEnum } from '@/enums';

import { getLocalStorageItem } from './localStorage';

export const getAccessToken = () => getLocalStorageItem('accessToken');

export const checkIsAdmin = (token?: string | null) => {
  const decodedToken = token && JSON.parse(atob(token.split('.')[1]));
  return decodedToken?.role === UserRoleEnum.ADMIN;
};

export const setAccessTokenToHeaders = (headers: Headers) => {
  const token = typeof localStorage !== 'undefined' && getLocalStorageItem('accessToken');
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  return headers;
};
