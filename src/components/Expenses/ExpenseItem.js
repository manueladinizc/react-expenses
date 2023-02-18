import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
  //[w,setW] = useState(props.W); w é o valor inicial definido em useState(pros.w) e setW, a função que será executada para alterar para novo valor. useState sempre retorna um array com os dois valores, atual e o da mudança
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React')
  //  function clickHandler() {}
  const clickHandler = () => {
  setTitle('Updated!');
  console.log(title);
 };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
        <div className="expense-item__price">{props.amount}</div>
        {/* Se colocar o () em clickHAndle JS executa a função no momento que a linha é chamada */}
        <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
