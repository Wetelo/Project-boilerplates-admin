import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUserResponse } from '@/interfaces';
import { getAccessToken } from '@/utils';
import { removeAccessToken } from '@/utils/auth';

interface AuthState {
  accessToken: string | null;
  user: IUserResponse | null;
}

const initialState: AuthState = {
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

export const { setAccessToken } = authSlice.actions;

export const authReducer = authSlice.reducer;
