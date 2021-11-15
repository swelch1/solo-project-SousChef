import { IRecipe } from "../../interface/recipeInterface";

export function setStateInterfaceFromRecipes (recipes: IRecipe[]): {
  allRecipes: IRecipe[],
  allCuisines: string[],
  healthLabels: string[]
} {
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
  allCuisines.sort();
  allHealthLabels.sort();
  return {
    allRecipes: recipes,
    allCuisines,
    healthLabels: allHealthLabels
  };
}

export function featurize (allRecipes: IRecipe[]): IRecipe[] {
  const len = allRecipes.length;
  if (len === 0) {return []}
  return [allRecipes[getRandomNum(len)], allRecipes[getRandomNum(len)], allRecipes[getRandomNum(len)]];
}

export function getRandomNum(len: number): number {
  return Math.round(Math.random() * len);
}

export function capitalizeFirstLetter(string: string): string {
  const wordsArr = string.split(' ');
  const mappedArr = wordsArr.map(word => word.slice(0,1).toUpperCase() + word.slice(1))
  return mappedArr.join(' ');
}

export function convertTime (mins: number): string {
  const minutes = (mins % 60);
  const hours = mins/60 > 1 ? Math.floor(mins/60) : undefined;
  return hours ? `${hours} hr ${minutes} mins` : `${minutes} mins`
}