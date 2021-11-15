'use strict';

const Model = require('../models/recipe');
import { IRecipe } from '../../interface/recipeInterface';
import { Request, Response } from 'express';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'lefthanded-potato124%'


export async function registerUser (req: Request, res: Response): Promise<void> {
  try {
    console.log('New registration request');
    const { username, password } = req.body;
    if (!username || !password) { 
      res.status(404).send({ isAuth: false, message: 'Enter both username and password' });
      return; 
    }
    const isUser = await Model.registerUser(username, password);
    if (isUser) {
      const id = isUser._id;
      const accessToken = jwt.sign({ id }, SECRET_KEY);
      res.status(200).send({ isAuth: true, message: 'New user registered', accessToken });
      return;
    } else {
      res.status(409).send({ isAuth: false, message: 'User already exists' });
      return;
    } 
  } catch (e) {
    console.log('Error registering user');
    res.sendStatus(500);
  }
}

export async function loginUser (req: Request, res: Response): Promise<void> {
  try {
    console.log('New user login request');
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(404).send({ isAuth: false, message: 'Enter both username and password' });
      return;
    }
    const isUser = await Model.loginUser(username, password);
    if (isUser) {
      const id = isUser._id;
      const accessToken = jwt.sign({ id }, SECRET_KEY);
      res.status(200).send({ isAuth: true, message: 'Logging user in', accessToken });
      return;
    } else {
      res.status(409).send({ isAuth: false, message: 'User already exists' });
      return;
    }
  } catch (e) {
    console.log('Error checking user login creds');
    res.sendStatus(500);
  }
}

export async function getAllRecipes (req: Request, res: Response): Promise<void> {
  try {
    console.log('New request for all recipes');
    const allRec: IRecipe[] = await Model.getRecipes();
    res.status(200);
    res.send(allRec);
  } catch (e: any) {
    console.log('Error getting all recipes', e);
    res.sendStatus(500);
  }
}

export async function searchRecipes (req: Request, res: Response): Promise<void> {
  try {
    console.log('New search request');
    const searchTerm = req.params.searchTerm;
    const searchRes: IRecipe[] = await Model.getRecipes(searchTerm);
    res.status(200);
    res.send(searchRes);
  } catch (e: any) {
    console.log('Error searching for recipes', e);
    res.sendStatus(500);
  }
}

export async function findMatches (req: Request, res: Response): Promise<void> {
  try {
    console.log('New request for random');
    const criteria = req.body;
    const result = await Model.findMatches(criteria);
    res.status(200).send(result);
  } catch (e) {
    console.log('Error finding matches', e);
    res.sendStatus(500);
  }
}



