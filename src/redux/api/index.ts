import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6764223a52b2a7619f5b899a.mockapi.io/card"
  }),
  endpoints: () => ({}),
  tagTypes: ["COMMENTS"]
});

export const {} = mainApi;
