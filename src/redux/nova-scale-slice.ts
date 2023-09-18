import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface TransformState {
  x: number;
  y: number;
  z: number;
}

const initialState: TransformState = {
  x: 0,
  y: 0,
  z: 0,
};

export const novaTransform = createSlice({
  name: 'transformScale',
  initialState,
  reducers: {
    setTransform: (state, action: PayloadAction<TransformState>) => {
      return (state = action.payload);
    },
  },
});

export const { setTransform } = novaTransform.actions;

export default novaTransform.reducer;
