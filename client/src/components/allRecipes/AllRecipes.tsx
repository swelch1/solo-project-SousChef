import React from 'react'
import { useAppSelector } from '../../app/hooks'
import RecipeSmall from '../recipeSmall/RecipeSmall';
import SearchBar from '../searchbar/SearchBar';
import './AllRecipes.css';

const AllRecipes = () => {
  const allRecipes = useAppSelector(state => state.allRecipes);

  return (
    <div className="AllRecipes">
      <SearchBar />
      <div className="AllRecipes-container"> 
        {
          allRecipes.length
          ? allRecipes.map(rec => <RecipeSmall key={rec._id} recipe={rec}/>)
          : <div>Loading Recipes</div>
        }
      </div>
    </div>
  )
}

export default AllRecipes
