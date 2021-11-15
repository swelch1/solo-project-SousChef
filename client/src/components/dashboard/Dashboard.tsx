import React from 'react'
import { useAppSelector } from '../../app/hooks'
import ChooseRandom from '../chooseRandom/ChooseRandom'
import RecipeSmall from '../recipeSmall/RecipeSmall'
import SearchBar from '../searchbar/SearchBar'
import { Link } from 'react-router-dom'

import { featurize } from '../../helperFunctions'
import './Dashboard.css';


const Dashboard = () => {
  const allRecipes = useAppSelector(state => state.allRecipes);
  const featuredRecipes = featurize(allRecipes);

  return (
    <div className="Dashboard">
      <SearchBar />
      <div className="Dashboard-body">
        <ChooseRandom />
        <div className="Dashboard-body-recipes-container">
          <div className="Dashboard-header">Explore Recipes</div>
          <hr />
          <div id="dash-shuffle-button">
            <Link to="/dashboard">
              <button className="shuffle-button">Shuffle</button>
            </Link>  
          </div>
          <div className="Dashboard-body-recipes">
            {
              featuredRecipes
              ? featuredRecipes.map(rec => <RecipeSmall key={rec._id} recipe={rec}/>)
              : <div>No featured recipes today</div> 
            }
          </div>
        </div>
        <div className="Dashboard-login-container">
          <div className="Dashboard-header">My List</div>
          <hr />
          <div className="Dashboard-login">
            <div id="Dashboard-login-label">Login/Register to View Your List
              <Link to="/login">
                <button>Login/Register</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
