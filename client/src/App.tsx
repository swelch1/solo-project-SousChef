import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { updateAllRecipes, updateUserAuth } from './app/actions';
import './App.css';
import { setStateInterfaceFromRecipes } from './helperFunctions';
import { Routes, Route, Outlet, useNavigate } from 'react-router-dom';

import { getFeaturedRecipes } from './APIService';
import Navbar from './components/navbar/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import AllRecipes from './components/allRecipes/AllRecipes';
import SearchResults from './components/searchResults/SearchResults';
import RecipeItem from './components/recipeItem/RecipeItem';
import RandomRecipe from './components/randomRecipe/RandomRecipe';
import Login from './components/login/Login';
import Register from './components/register/Register';
import MyList from './components/myList/MyList';

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state);
  
  useEffect(()=> {
    async function getFeatured(): Promise<void> {
      const featured = await getFeaturedRecipes();
      const newState = setStateInterfaceFromRecipes(featured)
      dispatch(updateAllRecipes({
        ...state,
        ...newState
      }));
    }
    getFeatured();
    // check user creds in case of page refresh
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken && state.isAuthenticated === false) {dispatch(updateUserAuth())}
    navigate('/dashboard');
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="allRecipes" element={<AllRecipes />} />
        <Route path="search/:searchTerm" element={<SearchResults />} />
        <Route path="recipe/:recipeID" element={<RecipeItem />} />
        <Route path="recipeFinder" element={<RandomRecipe />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="myList" element={<MyList />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;