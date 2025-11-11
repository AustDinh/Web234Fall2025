import { useState } from 'react';

function IncrementCounter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    console.log("Before The Increment:", count);

    setTimeout(() => {
   
      console.log("After Delay:", count);
      setCount(count + 1);
    }, 2000);
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment + 1</button>
    </>
  );
}

export default function App() {
  return (
    <>
      <IncrementCounter />
    </>
  );
}
