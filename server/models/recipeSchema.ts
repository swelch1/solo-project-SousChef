'use strict';

const { Schema } = require('mongoose');

export const recipeSchema = new Schema({
  uri: String,
  label: String,
  image: String,
  source: String,
  url: String,
  shareAs: String,
  yield: Number,
  dietLabels: [String],
  healthLabels: [String],
  cautions: [String],
  ingredientLines: [String],
  ingredients: [
    {
      text: String,
      quantity: Number,
      measure: String,
      food: String,
      weight: Number,
      foodCategory: String,
      foodId: String,
      image: String
    }
  ],
  calories: Number,
  totalWeight: Number,
  totalTime: Number,
  cuisineType: [String]
})