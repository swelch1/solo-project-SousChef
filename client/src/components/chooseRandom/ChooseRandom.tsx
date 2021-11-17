import React from 'react'
import { ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateRandomRecipe, updateCriteria } from '../../app/actions';
import { capitalizeFirstLetter, getRandomNum } from '../../helperFunctions';
import { findRandomMatches } from '../../APIService';
// styling
import './ChooseRandom.css';

const ChooseRandom = () => {
  const state = useAppSelector(state => state);
  const { allRecipes, allCuisines, healthLabels, criteria } = state;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function updateCriteriaState (e: (ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>), label: string): void {
    e.preventDefault();
    const output = e.target.value;
    const newVal = (label ==='numIngredients' || label === 'cookTime') ? +output : output;
    dispatch(updateCriteria({
      ...state,
      criteria: {
        ...criteria,
        findAny: false,
        [label]: newVal,
      }
    }));
  };

  async function handleSubmit (e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const recipeMatches = criteria.findAny === true ? allRecipes : await findRandomMatches(criteria);
    const randNum = getRandomNum(recipeMatches.length - 1);
    dispatch(updateRandomRecipe({...state, randomRecipe: recipeMatches[randNum]}));
    navigate('/recipeFinder');
  }

  function handleReset (): void {
    dispatch(updateCriteria({
      ...state,
      criteria: {
        findAny: true,
        cuisine: 'all',
        numIngredients: undefined,
        healthLabel: 'none',
        cookTime: undefined,
      }
    }));
    const randNum = getRandomNum(allRecipes.length);
    dispatch(updateRandomRecipe({...state, randomRecipe: allRecipes[randNum]}));
  }

  return (
    <div className="ChooseRandom">
      <div id="ChooseRandom-header">Help Me Choose</div>
      <hr />
      <form className="ChooseRandom-form" onSubmit={handleSubmit} onReset={handleReset}>

        <label>Cuisine</label>
        <select id="cuisine" onChange={(e) => updateCriteriaState(e, "cuisine")} value={criteria.cuisine ? criteria.cuisine : 'all'}>
          <option value="all">All</option>
          {allCuisines.map(cuisine => <option key={cuisine} value={cuisine}>{capitalizeFirstLetter(cuisine)}</option>)}
        </select>

        <label>Number of Ingredients (min. 2)</label>
        <input id="numIngredients" type="number" onChange={(e) => updateCriteriaState(e, "numIngredients")} placeholder="10..." min="2" value={criteria.numIngredients ? criteria.numIngredients : ''}></input>

        <label>Dietary Category</label>
        <select id="healthLabel" onChange={(e) => updateCriteriaState(e, "healthLabel")} value={criteria.healthLabel ? criteria.healthLabel : 'none'}>
          <option value="none"> --</option>
          {healthLabels.map(label => <option key={label} value={label}>{capitalizeFirstLetter(label)}</option>)}
        </select>

        <label>Cook Time</label>
        <input id="cookTime" type="number" onChange={(e) => updateCriteriaState(e, "cookTime")} placeholder="50 mins..." value={criteria.cookTime ? criteria.cookTime : ''}></input>

        <button id="button1" type="submit">Find Me Something Good</button>
        <button id="button2" type="reset">Reset Search</button>
      </form>
    </div>
  )
}

export default ChooseRandom
