import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { updateFeaturedRecipes, updateMyList } from '../../app/actions'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchMyList } from '../../APIService'
import { featurize, sortedItems } from '../../helperFunctions'
// components
import ChooseRandom from '../chooseRandom/ChooseRandom'
import RecipeSmall from '../recipeSmall/RecipeSmall'
import SearchBar from '../searchbar/SearchBar'
import RecipeMicro from '../recipeMicro/RecipeMicro'
// styling
import './Dashboard.css';

const Dashboard = () => {
  const state = useAppSelector(state => state);
  const { allRecipes, featuredRecipes, isAuthenticated, myList } = state;
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getUserList(): Promise<void> {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        const fetchedList = await fetchMyList(accessToken);
        if (fetchedList.length) dispatch(updateMyList({...state, myList: fetchedList}));
      }
    }
    getUserList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  function handleShuffle (): void {
    dispatch(updateFeaturedRecipes({ ...state, featuredRecipes: featurize(allRecipes)}))
  }

  return (
    <div className="Dashboard">
      <SearchBar />
      <div className="Dashboard-body">
        <div className="chooser-container"><ChooseRandom /></div>
        <div className="Dashboard-body-recipes-container">
          <div className="Dashboard-header">Explore Recipes</div>
          <hr />
          <div id="dash-shuffle-button">
            <button onClick={handleShuffle} className="shuffle-button">Shuffle</button> 
          </div>
          <div className="Dashboard-body-recipes">
            {
              featuredRecipes
              ? featuredRecipes.map(rec => <RecipeSmall key={String(rec._id)} recipe={rec}/>)
              : <div>No featured recipes today</div> 
            }
          </div>
        </div>
        <div className="Dashboard-login-container">
          <div className="Dashboard-header">My List</div>
          <hr />
          <div className="Dashboard-login-container-scroll">
            {
              isAuthenticated 
              ? myList.length 
                ? sortedItems(myList).map(item => <RecipeMicro recipe={item} />)
                : <div>Add recipes to your list to see them here!</div>
              : (<div className="Dashboard-login">
                <div id="Dashboard-login-label">Login/Register to View Your List
                  <Link to="/login">
                    <button>Login/Register</button>
                  </Link>
                </div>
              </div>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
