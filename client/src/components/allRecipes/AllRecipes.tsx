import React, { useState, useEffect } from 'react'
import { IRecipe } from '../../../../interface/recipeInterface';
import { useAppSelector } from '../../app/hooks'
import RecipeSmall from '../recipeSmall/RecipeSmall';
import SearchBar from '../searchbar/SearchBar';
import './AllRecipes.css';

const AllRecipes = () => {
  const { allRecipes, allCuisines} = useAppSelector(state => state);
  const [selectedRecipes, setSelectedRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    setSelectedRecipes(allRecipes);
  },[allRecipes]);

  function handleClick(cuisine: string): void {
    console.log(cuisine);
    const newArr: IRecipe[] = [];
    if (cuisine === 'all') {
      setSelectedRecipes(allRecipes);
    } else {
      allRecipes.map((rec: IRecipe) => {
        if (rec.cuisineType.includes(cuisine)) {
          newArr.push(rec);
        }
      })
      setSelectedRecipes(newArr);
    }
  }

  return (
    <div className="AllRecipes">
      <SearchBar />
      <div className="header">All Recipes</div>
      <div className="cuisine-buttons">
        <button onClick={() => handleClick('all')} value="all">All</button>
        {
          allCuisines.length
          ? allCuisines.map(c => <button key={c} onClick={() => handleClick(c)} value={c}>{c.slice(0,1).toUpperCase() + c.slice(1)}</button>)
          : <div>Loading cuisines</div>
        }
      </div>
      <div className="AllRecipes-container"> 
        {
          selectedRecipes.length
          ? selectedRecipes.map(rec => <RecipeSmall key={rec._id} recipe={rec}/>)
          : <div>Loading Recipes</div>
        }
      </div>
    </div>
  )
}

export default AllRecipes
