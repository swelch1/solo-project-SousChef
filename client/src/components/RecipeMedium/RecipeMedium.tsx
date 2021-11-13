import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { capitalizeFirstLetter, convertTime } from '../../helperFunctions';
import { updateCurrRecipe } from '../../app/actions';
import './RecipeMedium.css';

const RecipeMedium = () => {
  const state = useAppSelector(state => state);
  const recipe = state.randomRecipe;
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
                  <div>Serves: {Math.round(recipe.yield)}</div>
                  <div>(click to see health labels/full details)</div>
                </div>
              </div>
            </div>
          )
          : <div>Loading recipe</div>
        }
    </div>
  )
}

export default RecipeMedium
