import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateCurrRecipe } from '../../app/actions';
import { IRecipe } from '../../../../interface/recipeInterface';
// styling
import './RecipeMicro.css';

interface Prop {
  recipe: IRecipe
}

const RecipeMicro = ({ recipe }: Prop) => {
  const state = useAppSelector(state => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleClick (): void {
    dispatch(updateCurrRecipe({...state, currRecipe: recipe}))
    navigate(`/recipe/${recipe._id}`)
  }

  return (
    <div className="RecipeMicro" onClick={handleClick}>
      <img src={recipe.image} alt={recipe.label}></img>
      <div>{recipe.label}</div>
    </div>
  )
}

export default RecipeMicro
