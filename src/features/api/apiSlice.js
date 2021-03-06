import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({

    reducerPath: 'api',


    baseQuery: fetchBaseQuery({ baseUrl: 'https://' }),

    endpoints: builder => ({

        getProducts: builder.query({

            query: (page) => `api.escuelajs.co/api/v1/products?offset=${page}&limit=12`,

        }),
        signUpUsers: builder.mutation({
            query: (userData) => ({
                url: 'nodejs-post-app.herokuapp.com/api/user/register',
                method: 'POST',
                body: userData
            })
        }),
        loginUser: builder.mutation({
            query: (userData) => ({
                url: 'nodejs-post-app.herokuapp.com/api/user/login',
                method: 'POST',
                body: userData
            })
        })
    })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetProductsQuery, useSignUpUsersMutation, useLoginUserMutation } = apiSlice
