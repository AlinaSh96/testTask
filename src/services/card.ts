import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {ICard} from "../models/ICard";
export const cardApi = createApi({
  reducerPath: "createApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getCard: builder.query<ICard[], { page: number }>({
      query: (arg) => {
        const LIMIT = 10;
        const { page = 0 } = arg;
        return {
          url: `/albums/1/photos`,
          params: {
            _limit: LIMIT,
            _page: page,
          },
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems)
      },

      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
      
    }),
  }),
});

export const { useGetCardQuery } = cardApi;