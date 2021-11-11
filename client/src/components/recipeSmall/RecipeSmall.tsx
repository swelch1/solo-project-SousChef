import React from 'react'
import { IRecipe } from '../../../../interface/recipeInterface'

const RecipeSmall = ({ recipe }: any) => {

  return (
    <div className="RecipeSmall">
      {
        recipe
        ? (
          <div>
            <img src={recipe.image} alt={recipe.label}></img>
            <div id="Recipe-title">{recipe.label}</div>
            <div id="Recipe-info">
              <div>Cook time: {recipe.totalTime}</div>
              <div>Serves: {recipe.yield}</div>
            </div>
          </div>
        )
        : <div>Loading recipe</div>
      }
    </div>
  )
}

export default RecipeSmall


