import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';


// const Expenses = (props) => {
 const Expenses = (props) => {  
 
  const [filteredYear, setFilteredYear] = useState('2019');

  const filterChangeHandler = (selectYear) => {
    console.log('Expenses.js '+ selectYear);    
    setFilteredYear(selectYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0 ){
      expensesContent = filteredExpenses.map((expense) => ( 
      <ExpenseItem 
      title={expense.title} 
      amount={expense.amount}
      date={expense.date}
      />
    ));
  }
  

  
  return (
    <div> 
      <Card className="expenses">
        <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter ={filterChangeHandler}/>
        {expensesContent}
    </Card>
  </div>

);

}

export default Expenses;