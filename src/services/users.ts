import { API_ROUTES } from '@/constants/apiRoutes';
import { baseApi } from '@/services/base';
import type { IRequestParams, IResponse, IUserResponse } from '@/types';

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IResponse<IUserResponse>, IRequestParams>({
      query: (params) => ({
        url: API_ROUTES.USERS,
        params,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.items.map(({ id }) => ({
                type: 'Users' as const,
                id,
              })),
              { type: 'Users', id: 'LIST' },
            ]
          : [{ type: 'Users', id: 'LIST' }],
      keepUnusedDataFor: 1,
    }),
    getUserById: builder.query<IUserResponse, string>({
      query: (id) => ({
        url: `${API_ROUTES.USERS}/${id}`,
      }),
      providesTags: () => ['Users'],
    }),
    // set IUserFormParams
    editUser: builder.mutation<IUserResponse, unknown>({
      query: ({ id, ...body }) => ({
        url: `${API_ROUTES.USERS}/${id}`,
        body,
        method: 'PUT',
      }),
      invalidatesTags: ['Users'],
    }),
    deleteUser: builder.mutation<void, number | undefined>({
      query: (id) => ({
        url: `${API_ROUTES.USERS}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
    }),
    // set IUserFormParams
    createUser: builder.mutation<IUserResponse, unknown>({
      query: (body) => ({
        url: `${API_ROUTES.USERS}`,
        body,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useDeleteUserMutation,
  useGetUserByIdQuery,
  useEditUserMutation,
  useCreateUserMutation,
} = usersApi;
