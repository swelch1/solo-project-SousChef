import { createReducer } from '@reduxjs/toolkit';
import { updateAllRecipes, updateCurrRecipe, updateRandomRecipe, updateSearchRecipes } from './actions';
import { IRecipe } from "../../../interface/recipeInterface";

const initialState: IState = {
  allRecipes: [],
  allCuisines: [],
  healthLabels: [],
  searchResults:[],
  currRecipe: undefined,
  randomRecipe: undefined,
};

export const allRecipeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateAllRecipes, (state, action) => {
      if (!action.payload) return;
      state.allRecipes = action.payload.allRecipes;
      state.allCuisines = action.payload.allCuisines;
      state.healthLabels = action.payload.healthLabels;
    })
    .addCase(updateSearchRecipes, (state, action) => {
      if (!action.payload) return;
      state.searchResults = action.payload.searchResults;
    })
    .addCase(updateCurrRecipe, (state, action) => {
      if (!action.payload) return;
      state.currRecipe = action.payload.currRecipe;
    })
    .addCase(updateRandomRecipe, (state, action) => {
      if (!action.payload) return;
      state.randomRecipe = action.payload.randomRecipe;
    })
})



export interface IState {
  allRecipes: IRecipe[],
  allCuisines: string[],
  healthLabels: string[],
  searchResults: IRecipe[],
  currRecipe: IRecipe | undefined,
  randomRecipe: IRecipe | undefined,
}