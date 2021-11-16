import React from 'react'
import { useNavigate } from 'react-router-dom';
import { updateCurrRecipe } from '../../app/actions';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { convertTime } from '../../helperFunctions'; 
// styling
import './RecipeSmall.css';

const RecipeSmall = ({ recipe }: any) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state);
  const navigate = useNavigate();

  function handleClick (): void {
    dispatch(updateCurrRecipe({...state, currRecipe: recipe}))
    navigate(`/recipe/${recipe._id}`)
  }

  return (
    <div className="RecipeSmall" onClick={handleClick}>
      {
        recipe
        ? (
          <div className="Recipe-container">
            <img src={recipe.image} alt={recipe.label}></img>
            <div className="Recipe-info-container">
              <div id="Recipe-title">{recipe.label}</div>
              <div id="Recipe-info">
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

export default RecipeSmall


