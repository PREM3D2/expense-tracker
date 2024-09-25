import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTranscations = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmithandler = (e) => {
    e.preventDefault();
    const newTransaction ={
      id :  Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount
    }
    return addTransaction(newTransaction);
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form  onSubmit={onSubmithandler}>
        <div className="form-control">
          <label className="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label className="amount"
          >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTranscations;
