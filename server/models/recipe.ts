'use strict';
import { ICriteria } from '../../interface/criteriaInterface';

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

  const vals = await Model.aggregate(query);
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
    $lte: string
  },
  $project?: {
    [key:string]: number | { $size: string },
  },
  $match?: {
    numIngredients: {
      $lte: string
    }
  }
}
