import React from 'react'
import { useAppSelector } from '../../app/hooks';
import RecipeSmall from '../recipeSmall/RecipeSmall';
import SearchBar from '../searchbar/SearchBar';
import { sortedItems } from '../../helperFunctions';
import './MyList.css';

const MyList = () => {
  const myItems = useAppSelector(state => state.myList)
  
  return (
    <div className="MyList">
      <SearchBar />
      <div className="MyList-header">My List</div>
      <div className="MyList-container"> 
      {
        myItems
        ? sortedItems(myItems).map(item => <RecipeSmall key={item._id} recipe={item} />)
        : <div>Save a recipe to see it here!</div>
      }
      </div>


      
    </div>
  )
}

export default MyList
