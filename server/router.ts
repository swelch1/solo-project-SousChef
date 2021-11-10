'use strict';

export const router = require('express').Router();
const ctrl = require('./controllers/recipes')

router
  .get('/', ctrl.getAllRecipes)
  
  // nav bar
  .get('/all-recipes')
  .get('/cuisines')
  .post('/login')
  .post('/register')

  // search & choose one
  .get('/search/:searchTerm')
  .post('/find-one')

  // individual recipe
  .get('/recipe/:label');
