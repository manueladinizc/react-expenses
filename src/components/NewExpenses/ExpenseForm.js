import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  //Declarando 1 a 1:
  const [enteredTitle, setEnteredTitle ] = useState('')
  const [enteredAmount, setEnteredAmount ] = useState('')
  const [enteredDate, setEnteredDate ] = useState('')
  
  //Junto com a opção 2 e 3
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });
 
  const titleChangeHandler = (event) => {
    //opção 1
    setEnteredTitle(event.target.value);
    
    }
    //opção 2
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //opção 3
    //Se o seu state update depende do previous state, melhor usar essa forma:
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value };
    // });

    //ACIMA três formas de fazer


  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    
    
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    
  }

  return ( 
  <form>
    <div className='new-expense__control'>
      <label>Title</label>
      <input type='text' onChange={titleChangeHandler} />
      
    </div>
    <div className='new-expense__control'>
      <label>Amount</label>
      <input type='number' min='0.01' step='0,01' onChange = {amountChangeHandler}/>
    </div>
    <div className='new-expense__control'>
      <label>Date</label>
      <input type='date' min='201901-01' max='2022-12-31' onChange = {dateChangeHandler}/>
    </div>
    <div className='new-expense__actions'></div>
    <button type='submit'>Add Expense</button>
  </form>

  )
}
export default ExpenseForm;
