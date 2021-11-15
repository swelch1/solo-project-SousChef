'use strict';

export const router = require('express').Router();
const ctrl = require('./controllers/recipes')

router
  .get('/', ctrl.getAllRecipes)
  
  // nav bar
  .post('/login', ctrl.loginUser)
  .post('/register', ctrl.registerUser)

  // search & choose one
  .get('/search/:searchTerm', ctrl.searchRecipes)
  .post('/find-random', ctrl.findMatches);

