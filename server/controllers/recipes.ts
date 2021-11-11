'use strict';

const Model = require('../models/recipe');
import { IRecipe } from '../../interface/recipeInterface';
import { Request, Response } from 'express';

export async function getAllRecipes (req: Request, res: Response): Promise<void> {
  try {
    console.log('New request for all recipes');
    const allRec: IRecipe[] = await Model.getRecipes();
    res.status(200);
    res.send(allRec);
  } catch (e: any) {
    console.log('Error getting all recipes', e);
    res.status(500);
  }
}

export async function searchRecipes (req: Request, res: Response): Promise<void> {
  try {
    console.log('New search request');
    const searchTerm = req.params.searchTerm;
    const searchRes: IRecipe[] = await Model.getRecipes(searchTerm);
    res.status(200);
    res.send(searchRes);
  } catch (e: any) {
    console.log('Error searching for recipes', e);
    res.status(500);
  }
}

