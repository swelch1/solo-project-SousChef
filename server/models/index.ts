'use strict';

const mongoose = require('mongoose');
import { recipeSchema } from "./recipeSchema";

const URL = 'mongodb://localhost:27017/';
const dbName = 'solo-proj-recipes-clean';

mongoose.connect(`${URL}${dbName}`, dbStatus);

const recipeModel = new mongoose.model('recipe', recipeSchema);

function dbStatus (err: Error) {
  if (err) {console.log(`Error connecting to ${dbName}`)}
  else {console.log(`Connected to DB ${dbName}`)};
}

module.exports = recipeModel;