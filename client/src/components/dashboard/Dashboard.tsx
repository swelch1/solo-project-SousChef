import React from 'react'
import { useAppSelector } from '../../app/hooks'
import ChooseRandom from '../chooseRandom/ChooseRandom'
import RecipeSmall from '../recipeSmall/RecipeSmall'
import SearchBar from '../searchbar/SearchBar'
import { useNavigate } from 'react-router-dom'

import { featurize } from '../../helperFunctions'
import './Dashboard.css';


const Dashboard = () => {
  const allRecipes = useAppSelector(state => state.allRecipes);
  const featuredRecipes = featurize(allRecipes);
  const navigate = useNavigate();

  function handleClick (): void {
    navigate('/dashboard');
  }

  return (
    <div className="Dashboard">
      <SearchBar />
      <div className="Dashboard-body">
        <ChooseRandom />
        <div className="Dashboard-body-recipes-container">
          <div id="featured-title">Featured Recipes</div>
          <hr />
          <div id="dash-shuffle-button"><button className="shuffle-button" onClick={handleClick}>Shuffle</button></div>
          <div className="Dashboard-body-recipes">
            {
              featuredRecipes
              ? featuredRecipes.map(rec => <RecipeSmall key={rec._id} recipe={rec}/>)
              : <div>No featured recipes today</div> 
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
