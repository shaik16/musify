import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const geoLocation = createApi({
  reducerPath: 'geoLocation',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://geo.ipify.org/api/v2'
  }),
  endpoints: (builder) => ({
    getCountry: builder.query({
      query: () => {
        return {
          url: '/country',
          params: {
            apiKey: 'at_Zlag7NhnHQEVWMuVxP01c9IuljCSD'
          }
        };
      }
    })
  })
});

export const { useGetCountryQuery } = geoLocation;
