import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getEnv, setAccessTokenToHeaders } from '@/utils';

const { api } = getEnv();

const getBaseQuery = (): ReturnType<typeof fetchBaseQuery> =>
  fetchBaseQuery({
    baseUrl: api,
    prepareHeaders: (headers) => setAccessTokenToHeaders(headers),
  });

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: getBaseQuery(),
  refetchOnMountOrArgChange: true,
  tagTypes: ['Users', 'Profile'],
  endpoints: () => ({}),
});
