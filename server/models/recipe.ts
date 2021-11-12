'use strict';

const Model = require('./index');
import { IRecipe } from "../../interface/recipeInterface";

export async function getRecipes (searchTerm: string): Promise<IRecipe[]> {
  if (searchTerm) {
    const regex = new RegExp(searchTerm, 'gi')
    return await Model.find({label: regex});
  } else {
    return await Model.find({}, null, { sort: { label: 1 }});
  }
}