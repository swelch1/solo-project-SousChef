import React from 'react'
import { useState, ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ICriteria } from '../../../../interface/criteriaInterface';
import './ChooseRandom.css';
import { capitalizeFirstLetter } from '../../helperFunctions';
import { findRandomMatches } from '../../APIService';
import { useNavigate } from 'react-router-dom';
import { getRandomNum } from '../../helperFunctions';
import { updateRandomRecipe } from '../../app/actions';

const ChooseRandom = () => {
  const state = useAppSelector(state => state);
  const { allRecipes, allCuisines, healthLabels } = state;
  const [ criteria, setCriteria ] = useState<ICriteria>({findAny: true});
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function updateCriteria (e: (ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>), label: string): void {
    const newVal = e.target.value;
    setCriteria({
      ...criteria,
      findAny: false,
      [label]: newVal
    })
  }

  async function handleSubmit (e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    if (criteria.findAny === true) {
      const randNum = getRandomNum(allRecipes.length);
      dispatch(updateRandomRecipe({...state, randomRecipe: allRecipes[randNum]}));
    } else {
      const recipeMatches = await findRandomMatches(criteria);
      const randNum = getRandomNum(recipeMatches.length);
      dispatch(updateRandomRecipe({...state, randomRecipe: recipeMatches[randNum]}))
      setCriteria({findAny: true});
    }
    navigate('/recipeFinder');
  }

  return (
    <div className="ChooseRandom">
      <div id="ChooseRandom-header">Help me choose</div>
      <hr />
      <form className="ChooseRandom-form" onSubmit={handleSubmit}>

        <label>Cuisine</label>
        <select id="cuisine" onChange={(e) => updateCriteria(e, "cuisine")}>
          <option value="blank"> --</option>
          {allCuisines.map(cuisine => <option key={cuisine} value={cuisine}>{capitalizeFirstLetter(cuisine)}</option>)}
        </select>

        <label>Number of Ingredients</label>
        <input id="numIngredients" type="number" onChange={(e) => updateCriteria(e, "numIngredients")} placeholder="10..."></input>

        <label>Dietary Category</label>
        <select id="healthLabel" onChange={(e) => updateCriteria(e, "healthLabel")}>
          <option value="blank"> --</option>
          {healthLabels.map(label => <option key={label} value={label}>{capitalizeFirstLetter(label)}</option>)}
        </select>

        <label>Cook Time</label>
        <input id="cookTime" type="number" onChange={(e) => updateCriteria(e, "cookTime")} placeholder="50 mins..."></input>

        <button type="submit">Find Me Something Good</button>
      </form>
    </div>
  )
}

export default ChooseRandom
