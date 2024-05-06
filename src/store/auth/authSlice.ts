import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUserResponse } from '@/interfaces';
import { getAccessToken } from '@/utils';
import { removeAccessToken, setAccessTokenToStorage } from '@/utils/auth';

export interface IAuthState {
  accessToken: string | null;
  user: IUserResponse | null;
}

const initialState: IAuthState = {
  accessToken: getAccessToken() ?? null,
  user: null,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAccessToken(
      state,
      action: PayloadAction<{
        token: string | null;
        user: IUserResponse;
      }>,
    ) {
      setAccessTokenToStorage(action?.payload?.token as string);
      state.accessToken = action.payload.token;
      state.user = action.payload.user;
    },
    logout(state) {
      state.accessToken = null;
      state.user = null;
      removeAccessToken();
    },
  },
});

export const { setAccessToken, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
