import React from 'react'
import { useState, ChangeEvent, FormEvent } from 'react';
import { useAppSelector } from '../../app/hooks';
import { ICriteria } from './criteriaInterface';
import './ChooseRandom.css';
import { capitalizeFirstLetter } from '../../helperFunctions';

const ChooseRandom = () => {
  const { allCuisines, healthLabels } = useAppSelector(state => state);

  const [ criteria, setCriteria ] = useState<ICriteria>({});

  function updateCriteria (e: (ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>), label: string): void {
    const newVal = e.target.value;
    console.log(label, typeof parseInt(newVal) === 'number')
    setCriteria({
      ...criteria,
      [label]: newVal
    })
  }

  function handleSubmit (e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log(criteria, 'selected criteria');

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
