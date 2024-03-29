import React from 'react'
import OverviewDetails from '../components/OverviewDetails'
import Expenses from '../components/Expenses'
import AddExpenses from '../components/AddExpenses'
import './LandingScreen.css'


const LandingScreen = () => {
  return (
    <div id='container'>
        <h1>My Budget Planner</h1>
        <OverviewDetails/>
        <Expenses/>
        <AddExpenses/>
    </div>
  )
}

export default LandingScreen;