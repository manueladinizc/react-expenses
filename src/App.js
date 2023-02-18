import React from 'react';
import Expenses from './components/Expenses/Expenses';

// function App() {
  const App = () => { //Arrow function
  const expenses = [
    { id:'e1', title: 'Car drive', amount: 245.56, date: new Date(2021,4,5) },
    { id:'e2',title: 'Car Insurance', amount: 300.56, date: new Date(2021,4,5) },
    { id:'e3', title: 'Car maintenance', amount: 900.56, date: new Date(2021,4,5) }
  ];

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
      <h2>Let's get started!</h2>
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
