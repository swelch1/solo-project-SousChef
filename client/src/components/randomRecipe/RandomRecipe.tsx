import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateRandomRecipe } from '../../app/actions';
import { getRandomNum } from '../../helperFunctions';
import { findRandomMatches } from '../../APIService';
// components
import ChooseRandom from '../chooseRandom/ChooseRandom'
import SearchBar from '../searchbar/SearchBar'
import RecipeMedium from '../RecipeMedium/RecipeMedium'
// styling
import './RandomRecipe.css';

const RandomRecipe = () => {
  const state = useAppSelector(state => state);
  const { criteria, allRecipes } = state;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  async function handleClick (): Promise<void> {
    if (criteria.findAny === true) {
      const randNum = getRandomNum(allRecipes.length);
      dispatch(updateRandomRecipe({...state, randomRecipe: allRecipes[randNum]}));
    } else {
      const recipeMatches = await findRandomMatches(criteria);
      const randNum = getRandomNum(recipeMatches.length);
      dispatch(updateRandomRecipe({...state, randomRecipe: recipeMatches[randNum]}))
    }
    navigate('/recipeFinder');
  }

  return (
    <div className="RandomRecipe">
      <SearchBar />
      <div className="random-recipe-container">
        <ChooseRandom />
        <div className="random-recipe-info">
          <div id="random-recipe-title">Hand Selected Just for You, Randomly</div>
          <hr />
          <div className="shuffle-btn-container"><button className="shuffle-btn" onClick={handleClick}>No Chance, Go Again</button></div>
          <RecipeMedium />
        </div>
      </div>
    </div>
  )
}

export default RandomRecipe
