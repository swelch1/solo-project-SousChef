import { createAction } from '@reduxjs/toolkit';
import { IState } from '../../../interface/stateInterface';

export const updateAllRecipes = createAction<IState>('UPDATE-ALL');

export const updateFeaturedRecipes = createAction<IState>('UPDATE-FEATURED');

export const updateSearchRecipes = createAction<IState>('UPDATE-SEARCH');

export const updateCurrRecipe = createAction<IState>('UPDATE-CURR-RECIPE');

export const updateRandomRecipe = createAction<IState>('UPDATE-RANDOM-RECIPE');

export const updateCriteria = createAction<IState>('UPDATE-CRITERIA');

export const updateUserAuth = createAction('UPDATE-AUTH');

export const updateMyList = createAction<IState>('UPDATE-MY-LIST');