import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getComments: build.query({
      query: () => ({
        method: "GET",
        url: "",
      }),
      providesTags: ["COMMENTS"],
    }),
    createComments: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "",
        body,
      }),
      invalidatesTags: ["COMMENTS"],
    }),
    deleteComment: build.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/${id}`,
      }),
      invalidatesTags: ["COMMENTS"],
    }),
    updateComment: build.mutation({
      query: ({ id, body }) => ({
        method: "PATCH",
        url: `/${id}`,
        body,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["COMMENTS"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCommentsQuery,
  useCreateCommentsMutation,
  useDeleteCommentMutation,
  useUpdateCommentMutation,
} = extendedApi;
