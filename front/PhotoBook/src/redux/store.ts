
import {configureStore} from '@reduxjs/toolkit';
import {authenticationSlice} from './slices/authentication.slice';

export const store = configureStore({
  reducer: {
    authentication: authenticationSlice.reducer,
  },
});

// for Typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;