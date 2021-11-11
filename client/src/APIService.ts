import { IRecipe } from '../../interface/recipeInterface';

const BASE_URL = 'http://localhost:3001/';

export function getFeaturedRecipes (): Promise<IRecipe[]> {
  console.log('Making request')
  return fetch(BASE_URL, {
    method: 'GET',
    headers: {'Content-type': 'application/json'}
  })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log('Error getting featured recipes', error));
}