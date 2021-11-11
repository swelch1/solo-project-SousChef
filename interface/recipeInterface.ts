'use strict';
import { ObjectId } from "mongodb";

export interface IRecipe {
  _id: ObjectId,
  uri: string,
  label: string,
  image: string,
  source: 'Real Simple',
  url: string,
  shareAs: string,
  yield: number,
  dietLabels: string[],
  healthLabels: string[],
  cautions: string[],
  ingredientLines: string[],
  ingredients: Ingredient[],
  calories: number,
  totalWeight: number,
  totalTime: number,
  cuisineType: string[],
  __v: number
}


interface Ingredient {
  text: string,
  quantity: number,
  measure: string,
  food: string,
  weight: number,
  foodCategory: string,
  foodId: string,
  image: string,
  _id: ObjectId
}