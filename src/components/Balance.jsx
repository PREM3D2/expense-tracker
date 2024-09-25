import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const balance = transactions.map(trx => trx.amount).reduce((acc, item) => (acc+=item),0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 >{balance}</h1>
    </div>
  )
}
export default Balance
