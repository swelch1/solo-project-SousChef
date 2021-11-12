import React from 'react'
import { useAppSelector } from '../../app/hooks'
import SearchBar from '../searchbar/SearchBar';
import './RecipeItem.css';
import { convertTime } from '../../helperFunctions';

const RecipeItem = () => {
  const { currRecipe } = useAppSelector(state => state);

  return (
    <div className="RecipeItem">
      <SearchBar />
      <div className="RecipeItem-container"> 
        {
          currRecipe
          ? <div className="RecipeItem-info"> 
            <div id="title">{currRecipe.label}</div>
            <hr />
            <div className="minor-property">Cook Time: {convertTime(currRecipe.totalTime)}</div>
            <div className="minor-property">Serves: {currRecipe.yield}</div>
            <div className="minor-property">Total Calories/Serving: {Math.round(currRecipe.calories/currRecipe.yield)}</div>
            <div className="minor-property">Ingredients:
              {currRecipe.ingredientLines.map(i => <li className="ingredient-item">{i}</li>)}
            </div>
            <div className="minor-property">Full Recipe Instructions: <br></br><a id="ext-link" href={currRecipe.url}>{currRecipe.url}</a></div>
            <img src={currRecipe.image} alt={currRecipe.label}></img>
          </div>
          : <div>Loading Recipe</div>
        }
      </div>
    </div>
  )
}

export default RecipeItem
