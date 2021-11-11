import React from 'react'
import ChooseRandom from '../chooseRandom/ChooseRandom'
import SearchBar from '../searchbar/SearchBar'


const Dashboard = () => {
  return (
    <div className="Dashboard">
      <SearchBar />
      <ChooseRandom />
      <div>Dashboard</div>
    </div>
  )
}

export default Dashboard
