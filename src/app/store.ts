import { requirementSlice } from '@/features/ReactFlow/requirementSlice.ts';
import {
  asyncThunkCreator,
  buildCreateSlice,
  configureStore,
} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { requirement: requirementSlice.reducer },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});
