import React from 'react';
import { useEffect } from 'react';
import { useAppDispatch } from './app/hooks';
import { updateAllRecipes } from './app/actions';
import './App.css';
import { setStateInterfaceFromRecipes } from './helperFunctions';

import { getFeaturedRecipes } from './APIService';
import Navbar from './components/navbar/NavBar';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  const dispatch = useAppDispatch();
  
  useEffect(()=> {
    async function getFeatured(): Promise<void> {
      const featured = await getFeaturedRecipes();
      const newState = setStateInterfaceFromRecipes(featured)
      dispatch(updateAllRecipes(newState));
    }
    getFeatured();
  }, [])

  return (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;