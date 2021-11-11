import { createReducer } from '@reduxjs/toolkit';
import { updateAllRecipes, updateSearchRecipes } from './actions';
import { IRecipe } from "../../../interface/recipeInterface";

const initialState: IState = {
  allRecipes: [],
  allCuisines: [],
  healthLabels: [],
  searchResults:[],
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
})



export interface IState {
  allRecipes: IRecipe[],
  allCuisines: string[],
  healthLabels: string[],
  searchResults: IRecipe[],
}