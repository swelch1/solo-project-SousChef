'use strict';

const { Schema, ObjectId } = require('mongoose');

export const userSchema = new Schema({
  username: String,
  password: String,
  savedRecipes: [ObjectId],
})