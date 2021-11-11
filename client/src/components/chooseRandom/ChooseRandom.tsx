import React from 'react'
import { useState, ChangeEvent, FormEvent } from 'react';
import { ICriteria } from './criteriaInterface';
import './ChooseRandom.css';

const ChooseRandom = () => {
  const [ criteria, setCriteria ] = useState<ICriteria>({});

  function updateCriteria (e: ChangeEvent<HTMLSelectElement>, id: string): void {
    const newVal = e.target.value;
    setCriteria({
      ...criteria,
      [id]: newVal
    })
  }

  function handleSubmit (e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log(criteria);
  }

  return (
    <div className="ChooseRandom">
      <div id="ChooseRandom-header">Help me choose</div>
      <hr />
      <form onSubmit={handleSubmit}>
        <label>Cuisine</label>
        <select id="cuisine" onChange={(e) => updateCriteria(e, "cuisine")}>
          {/* placeholder */}
          <option value="thai">Thai</option>
          <option value="russian">Russian</option>
          {/* cuisines.forEach(cuisine => <option value={cuisine}>{cuisine}</option>) */}
        </select>
        <button type="submit">Find Me Something Good</button>
      </form>
    </div>
  )
}

export default ChooseRandom
