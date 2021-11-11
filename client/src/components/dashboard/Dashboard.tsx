import React from 'react'
import { useAppSelector } from '../../app/hooks'
import ChooseRandom from '../chooseRandom/ChooseRandom'
import RecipeSmall from '../recipeSmall/RecipeSmall'
import SearchBar from '../searchbar/SearchBar'

import { featurize } from '../../helperFunctions'


const Dashboard = () => {
  const allRecipes = useAppSelector(state => state.allRecipes);
  const featuredRecipes = featurize(allRecipes);

  return (
    <div className="Dashboard">
      <SearchBar />
      <div className="Dashboard-body">
        <ChooseRandom />
        <div className="Dashboard-body-recipes">
        {
          featuredRecipes
          ? featuredRecipes.map(rec => <RecipeSmall recipe={rec}/>)
          : <div>No featured recipes today</div> 
        }
        </div>
      </div>
    </div>
  )
}

export default Dashboard
