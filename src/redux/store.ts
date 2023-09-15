import { configureStore } from '@reduxjs/toolkit';
import { cameraPosition } from './nova-position-slice';
import { isCameraMoving } from './nova-is-moving-slice';
import { novaTransform } from './nova-scale-slice';

export const store = configureStore({
  reducer: {
    cameraPosition: cameraPosition.reducer,
    isCameraMoving: isCameraMoving.reducer,
    novaTransform: novaTransform.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
