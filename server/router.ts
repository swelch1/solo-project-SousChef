'use strict';

export const router = require('express').Router();
const ctrl = require('./controllers/recipes')

router
  .get('/', ctrl.getAllRecipes)
  
  // nav bar
  .get('/all-recipes') // not sure this is needed, data on client and simple reroute & render
  .get('/cuisines')  // not sure this is needed, data on client and simple reroute & render
  .post('/login')
  .post('/register')

  // search & choose one
  .get('/search/:searchTerm', ctrl.searchRecipes)
  .post('/find-one')

  // individual recipe
  .get('/recipe/:label');
