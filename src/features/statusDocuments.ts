/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { StatusDocument } from '../types/StatusDocument';
import { getStatusDocument } from '../api/statusDocument';

type StatusDocumentsState = {
  statusDocuments: StatusDocument[];
  loading: boolean;
  hasError: boolean;
  responseErrors: string[];
  responseWarnings: string[];
};

const initialState: StatusDocumentsState = {
  statusDocuments: [],
  loading: false,
  hasError: false,
  responseErrors: [],
  responseWarnings: [],
};

export const initStatusDocuments = createAsyncThunk(
  'statusDocuments/fetch',
  (data: string) => getStatusDocument(data),
);

const statusDocumentsSlice = createSlice({
  name: 'statusDocuments',
  initialState,
  reducers: {
    clear: (state) => {
      state.statusDocuments = [];
      state.hasError = false;
      state.responseErrors = [];
      state.responseWarnings = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initStatusDocuments.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(initStatusDocuments.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.statusDocuments = action.payload.data;
      } else {
        state.hasError = true;
        state.responseErrors = action.payload.errors;
        state.responseWarnings = action.payload.warnings;
      }
      
      state.loading = false;
    });

    builder.addCase(initStatusDocuments.rejected, (state) => {
      state.hasError = true;
      state.loading = false;
      state.responseErrors = ['It is not possible to connect to the Nova Poshta server'];
    });
  },
});

export default statusDocumentsSlice.reducer;
export const { clear } = statusDocumentsSlice.actions;
