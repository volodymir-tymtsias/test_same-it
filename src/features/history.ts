/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type HistoryState = {
  trackingNumbers: string[];
};

const initialState: HistoryState = {
  trackingNumbers: JSON.parse(localStorage.getItem('trackingNumbers') || 'null') || [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    getTrackings: (state) => {
      state.trackingNumbers = JSON.parse(localStorage.getItem('trackingNumbers') || 'null') || [];
    },
    addTrackings: (state, action: PayloadAction<string>) => {
      if (!state.trackingNumbers.includes(action.payload)) {
        state.trackingNumbers.push(action.payload);
        localStorage.setItem('trackingNumbers', JSON.stringify(state.trackingNumbers));
      }
    },
    deleteTrackings: (state, action: PayloadAction<string>) => {
      if (state.trackingNumbers.includes(action.payload)) {
        const newTrackingNumbers = state.trackingNumbers.filter(tracking => tracking !== action.payload);

        state.trackingNumbers = newTrackingNumbers;
        localStorage.setItem('trackingNumbers', JSON.stringify(newTrackingNumbers));
      }
    },
    clear: (state) => {
      state.trackingNumbers = [];
      localStorage.setItem('trackingNumbers', JSON.stringify([]));
    },
  },
});

export default historySlice.reducer;
export const { 
  clear, 
  getTrackings, 
  addTrackings, 
  deleteTrackings 
} = historySlice.actions;
