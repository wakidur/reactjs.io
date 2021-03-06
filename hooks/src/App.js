import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UsingTheEffectHook from './components/UsingTheEffectHook';
import UseEffectsOne from './components/UseEffectsOne';

function App() {
  const [count, setCount] = useState(0);
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn Hooks' },
    { id: 2, text: 'Learn React' },
  ]);
  return (
    <div>
      <UsingTheEffectHook />
      <hr />
      <UseEffectsOne />
    </div>
  );
}

export default App;
