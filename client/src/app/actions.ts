import { createAction } from '@reduxjs/toolkit';
import { IState } from './reducers';

export const updateAllRecipes = createAction<IState>('UPDATE-ALL');

export const updateSearchRecipes = createAction<IState>('UPDATE-SEARCH');

export const updateCurrRecipe = createAction<IState>('UPDATE-CURR-RECIPE');