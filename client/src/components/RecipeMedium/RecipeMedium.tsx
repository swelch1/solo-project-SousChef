import React from 'react'
import { useAppSelector } from '../../app/hooks';
import { capitalizeFirstLetter, convertTime } from '../../helperFunctions';
import './RecipeMedium.css';

const RecipeMedium = () => {
  const recipe = useAppSelector(state => state.randomRecipe);

  return (
    <div className="RecipeMedium">
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
