import React from 'react';

import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from './components/Expenses/Expenses';

// function App() {
  const App = () => { //Arrow function
  const expenses = [
    { id:'e1', title: 'Car drive', amount: 245.56, date: new Date(2021,4,5) },
    { id:'e2',title: 'Car Insurance', amount: 300.56, date: new Date(2021,4,5) },
    { id:'e3', title: 'Car maintenance', amount: 900.56, date: new Date(2021,4,5) }
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  }

  //Escrevendo código sem o JSX. preciso importar o React:
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 
  //   "Ĺet's get started!"),
  //   React.createElement(Expenses, {items: expenses},)
  // );


//Código em JSX:
  return (
    <div> 
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
