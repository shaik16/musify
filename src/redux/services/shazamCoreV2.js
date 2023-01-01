import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApiV2 = createApi({
  reducerPath: 'shazamCoreApiV2',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v2',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_KEY);
      headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getArtistDetails: builder.query({
      query: ({ artistId }) => {
        return {
          url: `/artists/details`,
          params: {
            artist_id: artistId
          }
        };
      }
    })
  })
});

export const { useGetArtistDetailsQuery } = shazamCoreApiV2;
