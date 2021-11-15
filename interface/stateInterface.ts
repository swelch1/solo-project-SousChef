import { ICriteria } from "./criteriaInterface";
import { IRecipe } from "./recipeInterface";

export interface IState {
  allRecipes: IRecipe[],
  allCuisines: string[],
  healthLabels: string[],
  searchResults: IRecipe[],
  currRecipe: IRecipe | undefined,
  randomRecipe: IRecipe | undefined,
  criteria: ICriteria,
  isAuthenticated: boolean,
}