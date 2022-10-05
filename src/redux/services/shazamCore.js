import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '53a8d66b5bmshf2ba86dca0aebb0p1e717djsnd97af6a4cc5c')
      headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com')
      return headers
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
  }),
})

export const { useGetTopChartsQuery } = shazamCoreApi
