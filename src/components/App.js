import { useState } from 'react';
import './App.css';

function App() {
  let [count,setCount] = useState(0);

  function myFunc(){
    setCount(count + 1);
  }
  return (
    <div className="App">
      <p>Button clicked {count} times</p>
      <button onClick={myFunc}>Click me</button>
    </div>
  );
}

export default App;
