import { createReducer } from '@reduxjs/toolkit';
import { updateAllRecipes, updateCurrRecipe, updateRandomRecipe, updateSearchRecipes, updateCriteria, updateUserAuth, updateMyList, updateFeaturedRecipes } from './actions';
import { IState } from "../../../interface/stateInterface";

const initialState: IState = {
  allRecipes: [],
  featuredRecipes: [],
  allCuisines: [],
  healthLabels: [],
  searchResults:[],
  currRecipe: undefined,
  randomRecipe: undefined,
  criteria: {findAny: true},
  isAuthenticated: false,
  myList: [],
};

export const allRecipeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateAllRecipes, (state, action) => {
      if (!action.payload) return;
      state.allRecipes = action.payload.allRecipes;
      state.allCuisines = action.payload.allCuisines;
      state.healthLabels = action.payload.healthLabels;
    })
    .addCase(updateFeaturedRecipes, (state, action) => {
      state.featuredRecipes = action.payload.featuredRecipes;
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
    .addCase(updateCriteria, (state, action) => {
      if (!action.payload) return;
      state.criteria = action.payload.criteria;
    })
    .addCase(updateUserAuth, (state, action) => {
      state.isAuthenticated = !state.isAuthenticated;
    })
    .addCase(updateMyList, (state, action) => {
      state.myList = action.payload.myList;
    })
})