import { createAction } from '@reduxjs/toolkit';
import { IState } from './reducers';
import { IRecipe } from '../../../interface/recipeInterface';

export const updateAllRecipes = createAction<IState>('UPDATE-ALL');

export const updateSearchRecipes = createAction<IState>('UPDATE-SEARCH');