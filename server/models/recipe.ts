'use strict';

import { ICriteria } from '../../interface/criteriaInterface';
import { IRecipe } from "../../interface/recipeInterface";
import { IUser } from "../../interface/userInterface";
const {recipeModel, userModel } = require('./index');
const bcrypt = require('bcrypt');

export async function registerUser (username: string, password: string): Promise<IUser | boolean> {
  const isUser = await userModel.findOne({username});
  if (isUser) {return false;}
  else {
    return userModel.create({
      username,
      password: bcrypt.hashSync(password, 10),
      savedRecipes: [],
    })
  }
}

export async function loginUser (username: string, password: string): Promise<IUser | boolean> {
  const isUser = await userModel.findOne({username});
  if (!isUser) return false;
  const isPass = bcrypt.compareSync(password, isUser.password);
  return isPass ? isUser : false;
}

export async function getRecipes (searchTerm: string): Promise<IRecipe[]> {
  if (searchTerm) {
    const regex = new RegExp(searchTerm, 'gi')
    return await recipeModel.find({label: regex});
  } else {
    return await recipeModel.find({}, null, { sort: { label: 1 }});
  }
}

export async function getUserList(id: string): Promise<IRecipe[]> {
  const { savedRecipes } = await userModel.findById(id);
  if (savedRecipes.length) {
    return await recipeModel.find({ _id: { $in: savedRecipes }})
  } else {
    return [];
  }
}

export async function updateUserList(recipeId: string, id: string): Promise<boolean> {
  const { savedRecipes } = await userModel.findById(id);
  const itemIndex = savedRecipes.indexOf(recipeId);
  if (itemIndex === -1) {
    await userModel.findByIdAndUpdate(id, { savedRecipes: [...savedRecipes, recipeId] });
    return true;
  } else {
    const updatedList = savedRecipes.slice();
    updatedList.splice(itemIndex, 1);
    await userModel.findByIdAndUpdate(id, { savedRecipes: updatedList });
    return false;
  }
}

export async function findMatches (criteria: ICriteria): Promise<IRecipe[]> {
  const matchConditions:queryConditions = {};
  const projectConditions:queryConditions = {};
  const matchCondsForProject:queryConditions = {};
  
  if (criteria.cuisine) {matchConditions.cuisineType = {$in: [criteria.cuisine]}};
  if (criteria.healthLabel) {matchConditions.healthLabels = {$in: [criteria.healthLabel]}};
  if (criteria.cookTime) {matchConditions.totalTime = {$lte: criteria.cookTime}};
  if (criteria.numIngredients) {
    projectConditions.$project = {...recipeProps, numIngredients: {$size: '$ingredients'}};
    matchCondsForProject.$match = {numIngredients: {$lte: criteria.numIngredients}};
  }
  // write query based on which criteria were passed
  const query = Object.keys(matchConditions).length > 0 
    ? Object.keys(projectConditions).length > 0
      ? [{$match: {...matchConditions}}, {...projectConditions}, {...matchCondsForProject}]
      : [{$match: {...matchConditions}}]
    : [{...projectConditions}, {...matchCondsForProject}];

  const vals = await recipeModel.aggregate(query);
  return vals;
}

//used in aggregate query in order to receive all fields for each recipe
const recipeProps = {
  _id: 1,
  uri: 1,
  label: 1,
  image: 1,
  source: 1,
  url: 1,
  shareAs: 1,
  yield: 1,
  dietLabels: 1,
  healthLabels: 1,
  cautions: 1,
  ingredientLines: 1,
  ingredients: 1,
  calories: 1,
  totalWeight: 1,
  totalTime: 1,
  cuisineType: 1,
  __v: 1
}

// setting common interface for all 3 objects used to create query in findMatches
interface queryConditions {
  cuisineType?: {
    $in: string[]
  },
  healthLabels?: {
    $in: string[]
  },
  totalTime?: {
    $lte: number
  },
  $project?: {
    [key:string]: number | { $size: string },
  },
  $match?: {
    numIngredients: {
      $lte: number
    }
  }
}
