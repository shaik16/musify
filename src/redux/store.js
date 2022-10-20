import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { geoLocation } from './services/geoLocation';
import { shazamCoreApi } from './services/shazamCore';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    [geoLocation.reducerPath]: geoLocation.reducer,
    player: playerReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware)
});
