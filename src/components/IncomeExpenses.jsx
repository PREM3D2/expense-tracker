import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const incomes = transactions.map(trx => trx.amount).filter(amount => amount>0).reduce((acc, item) => (acc+=item),0).toFixed(2);

  const expenses = transactions.map(trx => trx.amount).filter(amount => amount<0).reduce((acc, item) => (acc+=item),0).toFixed(2);
  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p  className="money plus">{incomes}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p className="money minus">{Math.abs(expenses)}</p>
    </div>
  </div>
  )
}

export default IncomeExpenses
