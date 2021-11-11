'use strict';

const Model = require('./index');
import { IRecipe } from "../../interface/recipeInterface";

export async function getRecipes (searchTerm: string): Promise<IRecipe[]> {
  if (searchTerm) {
    return await Model.find({label: searchTerm});
  } else {
    return await Model.find({});
  }
}