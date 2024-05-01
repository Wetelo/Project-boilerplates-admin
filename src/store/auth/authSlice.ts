import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUserResponse } from '@/interfaces';
import { getLocalStorageItem } from '@/utils';

interface AuthState {
  accessToken: string | null;
  user: IUserResponse | null;
}

const initialState: AuthState = {
  accessToken: getLocalStorageItem('accessToken') ?? null,
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
    },
  },
});

export const { setAccessToken } = authSlice.actions;

export const authReducer = authSlice.reducer;
