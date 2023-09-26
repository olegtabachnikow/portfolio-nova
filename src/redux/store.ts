import { configureStore } from '@reduxjs/toolkit';
import { cameraPosition } from './nova-position-slice';
import { isCameraMoving } from './nova-is-moving-slice';

export const store = configureStore({
  reducer: {
    cameraPosition: cameraPosition.reducer,
    isCameraMoving: isCameraMoving.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
