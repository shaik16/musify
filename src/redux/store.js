import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { geoLocation } from './services/geoLocation';
import { shazamCoreApi } from './services/shazamCore';
import { shazamCoreApiV2 } from './services/shazamCoreV2';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    [shazamCoreApiV2.reducerPath]: shazamCoreApiV2.reducer,
    [geoLocation.reducerPath]: geoLocation.reducer,
    player: playerReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware)
});
