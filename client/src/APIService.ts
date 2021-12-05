import { IRecipe } from '../../interface/recipeInterface';
import { ICriteria } from '../../interface/criteriaInterface';
import { IAuthRes } from '../../interface/authResponse';

const BASE_URL = 'http://localhost:3002';

export function getAllRecipes (): Promise<IRecipe[]> {
  return fetch(BASE_URL, {
    method: 'GET',
    headers: {'Content-type': 'application/json'}
  })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log('Error getting featured recipes', error));
}

export function searchRecipes (searchTerm: string): Promise<IRecipe[]> {
  return fetch(`${BASE_URL}/search/${searchTerm}`, {
    method: 'GET',
    headers: {'Content-type': 'application/json'}
  })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log('Error searching for recipes', error));
}

export function findRandomMatches (criteria: ICriteria ): Promise<IRecipe[]> {
  return fetch(`${BASE_URL}/find-random`, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(criteria)
  })
  .then(res => res.json())
  .then(data => data)
  .catch(error => console.log('Error finding criteria matches', error));
}

export async function registerUser (username: string, password: string): Promise<IAuthRes> {
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({username, password}),
  })
  .then(res => res.json())  
  .catch(error => console.log('Error registering user', error));
}

export async function logUserIn (username: string, password: string): Promise<IAuthRes> {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({username, password}),
  })
  .then(res => res.json())
  .catch(error => console.log('Error logging user in', error));
}

export async function fetchMyList (accessToken: string): Promise<IRecipe[]> {
  return fetch(`${BASE_URL}/myList`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })
  .then(res => res.json())
  .catch(error => console.log('Error finding user\'s list', error));
}

export async function updateMyListAPI (recipeId: string, accessToken: string): Promise<void> {
  fetch(`${BASE_URL}/myList`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ recipeId }),
  })
  .catch(error => console.log('Error adding recipe to user\'s list', error));
}
