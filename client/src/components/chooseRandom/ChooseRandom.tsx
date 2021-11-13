import React from 'react'
import { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import './ChooseRandom.css';
import { capitalizeFirstLetter } from '../../helperFunctions';
import { findRandomMatches } from '../../APIService';
import { useNavigate } from 'react-router-dom';
import { getRandomNum } from '../../helperFunctions';
import { updateRandomRecipe, updateCriteria } from '../../app/actions';

const ChooseRandom = () => {
  const state = useAppSelector(state => state);
  const { allRecipes, allCuisines, healthLabels, criteria } = state;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function updateCriteriaState (e: (ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>), label: string): void {
    const newVal = e.target.value;
    dispatch(updateCriteria({
      ...state,
      criteria: {
        ...criteria,
        findAny: false,
        [label]: newVal
      }
    }));
  };

  async function handleSubmit (e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    console.log(criteria)
    if (criteria.findAny === true) {
      const randNum = getRandomNum(allRecipes.length);
      dispatch(updateRandomRecipe({...state, randomRecipe: allRecipes[randNum]}));
    } else {
      const recipeMatches = await findRandomMatches(criteria);
      const randNum = getRandomNum(recipeMatches.length);
      dispatch(updateRandomRecipe({...state, randomRecipe: recipeMatches[randNum]}))
    }
    navigate('/recipeFinder');
  }

  function handleReset (): void {
    dispatch(updateCriteria({
      ...state,
      criteria: {
        findAny: true,
      }
    }));
  }

  return (
    <div className="ChooseRandom">
      <div id="ChooseRandom-header">Help me choose</div>
      <hr />
      <form className="ChooseRandom-form" onSubmit={handleSubmit} onReset={handleReset}>

        <label>Cuisine</label>
        <select id="cuisine" onChange={(e) => updateCriteriaState(e, "cuisine")}>
          <option value="blank"> --</option>
          {allCuisines.map(cuisine => <option key={cuisine} value={cuisine}>{capitalizeFirstLetter(cuisine)}</option>)}
        </select>

        <label>Number of Ingredients</label>
        <input id="numIngredients" type="number" onChange={(e) => updateCriteriaState(e, "numIngredients")} placeholder="10..."></input>

        <label>Dietary Category</label>
        <select id="healthLabel" onChange={(e) => updateCriteriaState(e, "healthLabel")}>
          <option value="blank"> --</option>
          {healthLabels.map(label => <option key={label} value={label}>{capitalizeFirstLetter(label)}</option>)}
        </select>

        <label>Cook Time</label>
        <input id="cookTime" type="number" onChange={(e) => updateCriteriaState(e, "cookTime")} placeholder="50 mins..."></input>

        <button id="button1" type="submit">Find Me Something Good</button>
        <button id="button2" type="reset">Reset Search</button>
      </form>
    </div>
  )
}

export default ChooseRandom
