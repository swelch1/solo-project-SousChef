import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { allRecipeReducer } from './reducers';

export const store = configureStore({
  reducer: {
    // allRecipes: allRecipeReducer
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
