import { API_ROUTES } from '@/constants/apiRoutes';
import { ISignInRequest, ISignInResponse } from '@/interfaces';

import { baseApi } from './base';

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation<ISignInResponse, ISignInRequest>({
      query: (credentials) => ({
        url: `${API_ROUTES.AUTH}/login`,
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useSignInMutation } = authApi;
