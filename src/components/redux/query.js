import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phoneBookApi = createApi({
  reducerPath: 'phoneBookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://644f70c6b61a9f0c4d22c00a.mockapi.io/api/',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => 'contacts',
      providesTags: [{ type: 'Contacts' }],
    }),

    delContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),

    addContact: builder.mutation({
      query: ({ name, phone }) => ({
        url: `contacts`,
        method: 'POST',
        body: { name, phone },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const { useGetContactsQuery, useDelContactMutation, useAddContactMutation } = phoneBookApi;
