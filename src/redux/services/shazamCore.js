import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_KEY);
      headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getSongsByGenre: builder.query({
      query: (params) => {
        return {
          url: '/charts/genre-world',
          params
        };
      }
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/tracks/related?track_id=${songid}`
    }),
    getArtistDetails: builder.query({
      query: ({ artistId }) => `/artists/details?artist_id=${artistId}`
    }),
    getSongsByCountry: builder.query({
      query: ({ country }) => `/charts/country?country_code=${country}`
    }),
    getSongsBySearch: builder.query({
      query: (params) => {
        return {
          url: '/search/multi',
          params
        };
      }
    })
  })
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery
} = shazamCoreApi;
