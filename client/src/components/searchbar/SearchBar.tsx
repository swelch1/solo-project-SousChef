import React from 'react'
import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchRecipes } from '../../APIService';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateSearchRecipes } from '../../app/actions';
// styling
import './SearchBar.css';

const SearchBar = () => {
  const [ searchTerm, setSearchTerm ] = useState<string>('');
  const state = useAppSelector(state => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function updateSearch (e: ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(e.target.value)
  }

  async function handleSubmit (e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const searchResults = await searchRecipes(searchTerm);
    dispatch(updateSearchRecipes({...state, searchResults}));
    setSearchTerm('');
    navigate(`/search/${searchTerm}`)
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} 
          placeholder="Find a recipe" onChange={updateSearch}>
        </input>
      </form>
    </div>
  )
}

export default SearchBar
