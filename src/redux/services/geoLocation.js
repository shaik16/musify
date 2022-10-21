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
            apiKey: import.meta.env.VITE_GEO_LOCATION_KEY
          }
        };
      }
    })
  })
});

export const { useGetCountryQuery } = geoLocation;
