import { mainApi } from './index'

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        method: "GET",
        url:  '/users'
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useGetUsersQuery } = extendedApi