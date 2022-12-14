import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "../interfaces/user";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://project-hungthinhland-api-main-assignment-react.vercel.app/api/' }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (user: IUser) => ({
                url: '/signup',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        }),
        signin: builder.mutation({
            query: (user: any) => ({
                url: '/signin',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        })
    })
})

export const { useSignupMutation, useSigninMutation } = userApi