import React from 'react'
import ChooseRandom from '../chooseRandom/ChooseRandom'
import SearchBar from '../searchbar/SearchBar'
import RecipeMedium from '../RecipeMedium/RecipeMedium'
import './RandomRecipe.css';

const RandomRecipe = () => {

  return (
    <div className="RandomRecipe">
      <SearchBar />
      <div className="random-recipe-container">
        <ChooseRandom />
        <div className="random-recipe-info">
          <div id="random-recipe-title">Randomly Chosen, Just for You</div>
          <hr />
          <RecipeMedium />
        </div>
      </div>
    </div>
  )
}

export default RandomRecipe
