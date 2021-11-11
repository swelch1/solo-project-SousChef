import { IRecipe } from "../../interface/recipeInterface";
import { IState } from "./app/reducers";

export function setStateInterfaceFromRecipes (recipes: IRecipe[]): IState {
  const allCuisines: string[] = [];
  const allHealthLabels: string[] = [];
  recipes.forEach(recipe => {
    if (recipe.totalTime === 0) {
      recipe.totalTime = getRandomNum(60);
    }
    recipe.healthLabels.forEach(label => {
      if (!allHealthLabels.includes(label)) {allHealthLabels.push(label)}
    })
    recipe.cuisineType.forEach(cuisine => {
      if (!allCuisines.includes(cuisine)) {allCuisines.push(cuisine)}
    })
  })
  return {
    allRecipes: recipes,
    allCuisines,
    healthLabels: allHealthLabels,
    searchResults: [],
  };
}

export function featurize (allRecipes: IRecipe[]): IRecipe[] {
  const len = allRecipes.length;
  if (len === 0) {return []}
  return [allRecipes[getRandomNum(len)], allRecipes[getRandomNum(len)], allRecipes[getRandomNum(len)], allRecipes[getRandomNum(len)]];
}

function getRandomNum(len: number): number {
  return Math.round(Math.random() * len);
}