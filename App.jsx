import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);


  function handleIncrement() {
    setCount(count + 1);
  }


  function handleDecrement() {
    setCount(count - 1);
  }

 
  function handleReset() {
    setCount(0);
  }

 
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default function App() {
  return (
    <Counter />
  );
}
