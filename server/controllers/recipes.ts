'use strict';

const Model = require('../models/recipe');
import { IRecipe } from '../../interface/recipeInterface';

export async function getAllRecipes (req: any, res: any): Promise<void> {
  try {
    const allRec: IRecipe[] = await Model.getAll();
    res.status(200);
    res.send(allRec);
  } catch (e: any) {
    console.log('Error getting all recipes', e);
    res.status(500);
  }
}





function getRandomNum(): number {
  return Math.round(Math.random() * 1900);
}
