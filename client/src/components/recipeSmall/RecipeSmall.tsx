import React from 'react'
import './RecipeSmall.css';

const RecipeSmall = ({ recipe }: any) => {
  function convertTime (mins: number): string {
    const minutes = (mins % 60);
    const hours = mins/60 > 1 ? Math.floor(mins/60) : undefined;
    return hours ? `${hours} hr ${minutes} mins` : `${minutes} mins`
  }

  return (
    <div className="RecipeSmall">
      {
        recipe
        ? (
          <div className="Recipe-container">
            <img src={recipe.image} alt={recipe.label}></img>
            <div className="Recipe-info-container">
              <div id="Recipe-title">{recipe.label}</div>
              <div id="Recipe-info">
                <div>Cook time: {convertTime(recipe.totalTime)}</div>
                <div>Serves: {recipe.yield}</div>
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


