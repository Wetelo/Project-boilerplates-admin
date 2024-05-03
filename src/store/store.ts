import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { baseApi } from '@/services/base';
import { usersApi } from '@/services/users';

import { authReducer } from './auth';
import { usersReducer } from './users';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  auth: authReducer,
  users: usersReducer,
});
export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([baseApi.middleware]),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
