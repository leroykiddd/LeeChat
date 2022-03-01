import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInfo } from 'src/store/features/info/types';
import { fetchInfo } from 'src/store/features/info/infoSlice';

export interface IBookingReviewsState {
  data: IInfo | null;
  isLoading: boolean;
  error: string;
}

const initialState: IBookingReviewsState = {
  data: null,
  isLoading: false,
  error: '',
};

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchInfo.fulfilled.type]: (state, action: PayloadAction<IInfo>) => {
      state.isLoading = false;
      state.error = '';
      state.data = action.payload;
    },
    [fetchInfo.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchInfo.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default infoSlice.reducer;
