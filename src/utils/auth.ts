import { UserRoleEnum } from '@/enums';

import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from './localStorage';

export const AUTH_TOKEN_NAME = 'accessToken';

export const setAccessTokenToStorage = (token: string) => setLocalStorageItem(AUTH_TOKEN_NAME, token);

export const getAccessToken = () => getLocalStorageItem(AUTH_TOKEN_NAME);
export const removeAccessToken = () => removeLocalStorageItem(AUTH_TOKEN_NAME);

export const checkIsAdmin = (token?: string | null) => {
  const decodedToken = token && JSON.parse(atob(token.split('.')[1]));
  return decodedToken?.role === UserRoleEnum.ADMIN;
};

export const setAccessTokenToHeaders = (headers: Headers) => {
  const token = typeof localStorage !== 'undefined' && getAccessToken();
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  return headers;
};
