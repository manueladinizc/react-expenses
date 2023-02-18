import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { id:'e1', title: 'Car drive', amount: 245.56, date: new Date(2021,4,5) },
    { id:'e2',title: 'Car Insurance', amount: 300.56, date: new Date(2021,4,5) },
    { id:'e3', title: 'Car maintenance', amount: 900.56, date: new Date(2021,4,5) }
  ];

  return (
    <div> 
      <h2>Let's get started!</h2>
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
