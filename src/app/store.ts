import { configureStore } from '@reduxjs/toolkit';
import { requirementSlice } from '../requirementSlice.ts';

export const store = configureStore({
  reducer: { requirement: requirementSlice.reducer },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
