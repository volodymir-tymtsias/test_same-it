import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import departmentsReducer from '../features/departments';

export const store = configureStore({
  reducer: {
    departments: departmentsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
