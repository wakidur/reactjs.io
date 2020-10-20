import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* step - 1 */}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> Click me</button>
    </div>
  );
}

export default App;
