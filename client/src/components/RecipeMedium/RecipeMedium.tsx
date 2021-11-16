import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { capitalizeFirstLetter, convertTime } from '../../helperFunctions';
import { updateCurrRecipe } from '../../app/actions';
// styling
import './RecipeMedium.css';

const RecipeMedium = () => {
  const state = useAppSelector(state => state);
  const recipe = state.randomRecipe;
  const criteria = state.criteria;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleClick (): void {
    if (!recipe) return;
    dispatch(updateCurrRecipe({...state, currRecipe: recipe}))
    navigate(`/recipe/${recipe._id}`)
  }

  return (
    <div className="RecipeMedium" onClick={handleClick}>
        {
          recipe
          ? (
            <div className="Recipe-container">
              <img src={recipe.image} alt={recipe.label}></img>
              <div className="Recipe-info-container">
                <div id="Recipe-title">{recipe.label}</div>
                <div id="Recipe-info">
                  <div>
                    {
                      recipe.cuisineType.length === 2 
                      ? <div>Cuisine: {capitalizeFirstLetter(recipe.cuisineType[0])}, {capitalizeFirstLetter(recipe.cuisineType[1])}</div>
                      : <div>Cuisine: {capitalizeFirstLetter(recipe.cuisineType[0])}</div>
                    }
                  </div>
                  <div>Cook time: {convertTime(recipe.totalTime)}</div>
                  <div>(click to see full details)</div>
                </div>
              </div>
            </div>
          )
          : <div>
            <div className="no-matches">No results for:</div>
              {criteria.cuisine ? <li>Cuisine: {capitalizeFirstLetter(criteria.cuisine)}</li> : <div />}
              {criteria.numIngredients? <li>Num Ingredients: {criteria.numIngredients}</li> : <div />}
              {criteria.healthLabel ? <li>Category: {criteria.healthLabel}</li> : <div />}
              {criteria.cookTime ? <li>Cook Time: {convertTime(criteria.cookTime)}</li> : <div />}
          </div>
        }
    </div>
  )
}

export default RecipeMedium
