import React from 'react'
import { useAppSelector } from '../../app/hooks'
import ChooseRandom from '../chooseRandom/ChooseRandom'
import SearchBar from '../searchbar/SearchBar'

const RandomRecipe = () => {
  const recipe = useAppSelector(state => state.randomRecipe);

  return (
    <div className="RandomRecipe">
      <SearchBar />
      <ChooseRandom />
      You got randomized a recipe good job
      {recipe ? recipe.label : <div>loading</div>}
    </div>
  )
}

export default RandomRecipe
