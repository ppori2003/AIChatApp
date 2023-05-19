import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }), // can make api calls
    reducerPath: "main",
    tagTypes: [],
    endpoints: (build) => ({
        postAiText: build.mutation({ // allows to make post api calls
            query: (payload) => ({
                url: "openai/text",
                method: "POST",
                body: payload,
            }),

        }),
    }),


});

export const {
    usePostAiTextMutation
} = api;