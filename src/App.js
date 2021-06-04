import {useState} from 'react';
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(1);
  const countHandler = (from, event) => {
    if(from === 'plus'){
      setCounter((prevState) => prevState >= 1000 ? prevState : prevState + 1);
    }
    else if(from === 'minus'){
      setCounter((prevState) => prevState <= 1 ? prevState : prevState - 1);
    }
    else{
      let val = +event.target.value;
      setCounter((prevState) => val < 1 || val > 1000 ? prevState : val);
    }
  }
  return (
    <div className="App">
      <div className = 'container'>
      <button className = 'item minus' onClick = {() => countHandler('minus')}>-</button>
      <input className = 'item input_field' value = {counter} onChange = {(e) => countHandler('input',e)}/>
      <button className = 'item plus' onClick = {() => countHandler('plus')}>+</button>
      </div>
    </div>
  );
}
