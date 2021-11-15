import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import SearchBar from '../searchbar/SearchBar';
import './RecipeItem.css';
import { convertTime } from '../../helperFunctions';
import { updateMyListAPI } from '../../APIService';
import { updateMyList } from '../../app/actions';

const RecipeItem = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state);
  const { currRecipe, myList } = state;

  function handleClick(): void {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken && currRecipe) {
      updateMyListAPI(String(currRecipe._id), accessToken);
      const myListIds = myList.map(item => item._id);
      const itemIndex = myListIds.indexOf(currRecipe._id);
      if (itemIndex === -1) {
        dispatch(updateMyList({ ...state, myList: [...myList, currRecipe] }));
      } else {
        const updatedList = myList.slice();
        updatedList.splice(itemIndex, 1);
        dispatch(updateMyList({ ...state, myList: updatedList }));
      }
    }
  }

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
            {
              myList.map(item => item._id).includes(currRecipe._id)
              ? <button onClick={handleClick}>- My List</button>
              : <button onClick={handleClick}>+ My List</button>
            }
          </div>
          : <div>Loading Recipe</div>
        }
      </div>
    </div>
  )
}

export default RecipeItem
