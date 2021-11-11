import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { IRecipe } from '../../interface/recipeInterface';

import { getFeaturedRecipes } from './APIService';
import Navbar from './components/navbar/NavBar';
import Dashboard from './components/dashboard/Dashboard';

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
      <Navbar />
      <Dashboard />
      {
        recipes.length
        ? recipes.map((r) => <div>{r.label}</div>)
        :<div>No recipes yet</div>
      }
    </div>
  );
}

export default App;