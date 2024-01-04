import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import departmentsReducer from '../features/departments';
import statusDocumentsReducer from '../features/statusDocuments';
import historyReducer from '../features/history';

export const store = configureStore({
  reducer: {
    departments: departmentsReducer,
    statusDocuments: statusDocumentsReducer,
    history: historyReducer,
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
