/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDepartments } from '../api/departments';
import { Department } from '../types/Department';
import { DataFetchDepartment } from '../types/DataFetchDepartment';

type DepartmentsState = {
  departments: Department[];
  loaded: boolean;
  hasError: boolean;
  responseErrors: string[];
  responseWarnings: string[];
  amount: number;
};

const initialState: DepartmentsState = {
  departments: [],
  loaded: false,
  hasError: false,
  responseErrors: [],
  responseWarnings: [],
  amount: 0,
};

export const initDepartments = createAsyncThunk(
  'departments/fetch',
  (data: DataFetchDepartment) => getDepartments(data),
);

const departmentsSlice = createSlice({
  name: 'departments',
  initialState,
  reducers: {
    clear: (state) => {
      state.departments = [];
      state.amount = 0;
      state.hasError = false;
      state.responseErrors = [];
      state.responseWarnings = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initDepartments.pending, (state) => {
      state.loaded = false;
    });

    builder.addCase(initDepartments.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.departments = action.payload.data;
        state.amount = action.payload.info.totalCount;
      } else {
        state.hasError = true;
        state.responseErrors = action.payload.errors;
        state.responseWarnings = action.payload.warnings;
      }
      
      state.loaded = true;
    });

    builder.addCase(initDepartments.rejected, (state) => {
      state.hasError = true;
      state.loaded = true;
      state.responseErrors = ['It is not possible to connect to the Nova Poshta server'];
    });
  },
});

export default departmentsSlice.reducer;
export const { clear } = departmentsSlice.actions;
