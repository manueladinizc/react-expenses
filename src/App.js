
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { id:'e1', title: 'Car drive', amount: 245.56, date: new Date(2021,4,5) },
    { id:'e2',title: 'Car Insurance', amount: 300.56, date: new Date(2021,4,5) },
    { id:'e2', title: 'Car maintenance', amount: 900.56, date: new Date(2021,4,5) }
  ];
  return (
    <div> 
      <h2>Let's get started!</h2>
      <ExpenseItem 
      title={expenses[0].title} 
      amount={expenses[0].amount}
      date={expenses[0].date}
      />
     <ExpenseItem 
      title={expenses[1].title} 
      amount={expenses[1].amount}
      date={expenses[1].date}
      />
      <ExpenseItem 
      title={expenses[2].title} 
      amount={expenses[2].amount}
      date={expenses[2].date}
      />
    </div>
  );
}

export default App;
