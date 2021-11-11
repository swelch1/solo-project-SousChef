import React from 'react'
import { useState, ChangeEvent, FormEvent } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [ searchTerm, setSearchTerm ] = useState<string>('');

  function updateSearch (e: ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(e.target.value)
  }

  function handleSubmit (e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log('searching');
    setSearchTerm('');
    //call appropriate API service function
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
