import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import SearchBar from '../searchbar/SearchBar';
import RecipeSmall from '../recipeSmall/RecipeSmall';
import './SearchResults.css'
import { searchRecipes } from '../../APIService';
import { useNavigate } from 'react-router-dom';
import { updateSearchRecipes } from '../../app/actions';

const SearchResults = () => {
  const state = useAppSelector(state => state);
  const { searchResults } = state;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  async function handleClick(searchTerm: string): Promise<void> {
    const searchResults = await searchRecipes(searchTerm);
    dispatch(updateSearchRecipes({...state, searchResults}));
    navigate(`/search/${searchTerm}`)
  }

  return (
    <div className="SearchResults">
      <SearchBar />
      <div className="header">Search Results</div>
      <div className="SearchResults-container"> 
        {
          searchResults.length
          ? searchResults.map(rec => <RecipeSmall key={rec._id} recipe={rec}/>)
          : <div className="no-results">
              <div className="header">No matches! Search again or click below:</div>
              <div className="no-results-buttons">
                <button value="chicken" onClick={() => handleClick("chicken")}>Chicken</button>
                <button value="fish" onClick={() => handleClick("fish")}>Fish</button>
                <button value="pasta" onClick={() => handleClick("pasta")}>Pasta</button>
                <button value="spinach" onClick={() => handleClick("spinach")}>Spinach</button>

              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default SearchResults
