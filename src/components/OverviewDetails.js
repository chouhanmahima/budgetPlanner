import React, { useContext } from 'react'
import BudgetContext from './BudgetContext'
import './OverviewDetails.css'

const OverviewDetails = () => {

    const {totalBudget,totalSpend} = useContext(BudgetContext)
    console.log(totalBudget,totalSpend)
  return (
    <div id='budget_container'>
         <div className='para'>
            <p>Budget: Rs.{totalBudget}</p>
        </div>
        <div class="para1">
            <p>Remaining: Rs.{totalBudget - totalSpend}</p>
        </div>
        <div className='para2' >
            <p>Spent so far:{totalSpend}</p>
        </div>
    </div>
  )
}

export default OverviewDetails