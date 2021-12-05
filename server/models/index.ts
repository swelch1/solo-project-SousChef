'use strict';
require('dotenv').config();

const mongoose = require('mongoose');
import { recipeSchema } from './recipeSchema';
import { userSchema } from './userSchema';

const URL = 'mongodb://localhost:27017/';
const dbName = 'solo-proj-recipes-clean';

mongoose.connect(`${URL}${dbName}`, dbStatus);
// mongoose.connect(process.env.DATABASE, dbStatus);

const recipeModel = new mongoose.model('recipe', recipeSchema);
const userModel = new mongoose.model('user', userSchema);

function dbStatus (err: Error) {
  if (err) {console.log(`Error connecting to ${dbName}`)}
  else {console.log(`Connected to DB ${dbName}`)};
}

module.exports = { 
  recipeModel,
  userModel 
};