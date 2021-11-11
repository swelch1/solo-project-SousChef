import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { IRecipe } from '../../interface/recipeInterface';

import { getFeaturedRecipes } from './APIService';

function App() {
  const [ recipes, setRecipes ] = useState<IRecipe[]>([]);

  useEffect(()=> {
    async function getFeatured(): Promise<void> {
      const featured = await getFeaturedRecipes();
      setRecipes(featured);
    }
    getFeatured();
  }, [])

  return (
    <div>
      {
        recipes.length
        ? recipes.map((r) => <div>{r.label}</div>)
        :<div>No recipes yet</div>
      }
    </div>
  );
}

export default App;