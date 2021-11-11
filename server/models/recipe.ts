'use strict';

const Model = require('./index');
import { IRecipe } from "../../interface/recipeInterface";

export async function getAll (): Promise<IRecipe[]> {
  return await Model.find({});
}