import { createAction } from '@reduxjs/toolkit';
import { IState } from './reducers';

export const updateAllRecipes = createAction<IState>('UPDATE-ALL');